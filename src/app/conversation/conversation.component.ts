import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

/*@ts-ignore*/
@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnInit {
  id: string = '';
  chatrooms: any[] = [];
  chatRoomData: any;
  conversation: any[] = [];

  backend: string = 'http://localhost:3001/chatroom';
  backendTarget: string = `http://localhost:3001/messages/admin/`;
  tokenExample: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODc2IiwiaWF0IjoxNzE3NTA1OTMzLCJleHAiOjE3MTgxMTA3MzN9.yiflcayCbqEWH-HxlZxzCClG3yQOm_COIypJjX0vsqo';

  ngOnInit() {
    this.fetchAllChatRooms();
    this.fetchChatRoom().then(() => {
      if (this.chatRoomData) {
        this.fetchConversation();
      }
    });
  }

  fetchAllChatRooms() {
    fetch(this.backend, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenExample}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.chatrooms = data;
      })
      .catch((error) => {
        console.error('Error fetching chat rooms:', error);
      });
  }

  async fetchChatRoom() {
    this.id = window.location.pathname.split('/').pop() as string;
    try {
      const response = await fetch(`${this.backend}/${this.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenExample}`,
        },
      });
      const data = await response.json();
      console.log({ chatRoom: data, line: 54 });
      this.chatRoomData = data;
    } catch (error) {
      console.error('Error fetching chat room:', error);
    }
  }

  fetchConversation() {
    console.log({
      chatRoomData: this.chatRoomData,
      backendTarget: this.backendTarget,
    });
    if (this.chatRoomData) {
      fetch(
        `${this.backendTarget}${this.chatRoomData.chatRoom.collaboratorMatricule}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.tokenExample}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('FETCHING MESSAGES :');
          console.log({ messages: data, line: 83 });
          this.conversation = data.messages;
        })
        .catch((error) => {
          console.error('Error fetching messages:', error);
        });
    }
  }
  isMyMessage(message: any): boolean {
    return message.senderAlias === 'admin';
  }

  messageInput: any;

  getVal(val: any) {
    this.messageInput = val.target.value;
  }

  sendMessage() {
    // Check if the message input is not empty
    if (this.messageInput.trim() !== '') {
      // Create the message object
      const newMessage = {
        message: this.messageInput,

        target: this.chatRoomData.chatRoom.collaboratorMatricule,
        chatRoomId: this.chatRoomData.chatRoom.id,
      };

      // Make a POST request to send the message to the backend

      const target: string = 'http://localhost:3001/messages/admin/send';
      fetch(target, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenExample}`,
        },
        body: JSON.stringify(newMessage),
      })
        .then((response) => {
          if (response.ok) {
            this.messageInput = '';

            this.fetchConversation();
          } else {
            console.error('Failed to send message');
          }
        })
        .catch((error) => {
          console.error('Network error:', error);
        });
    }
  }
}
