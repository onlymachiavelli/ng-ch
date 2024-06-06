import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/*@ts-ignore */
@Component({
  selector: 'app-admin-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-chat.component.html',
  styleUrl: './admin-chat.component.css',
})
export class AdminChatComponent {
  chatrooms: any = [];

  backend: string = 'http://localhost:3001/chatroom';

  tokenExample: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODc2IiwiaWF0IjoxNzE3NTA1OTMzLCJleHAiOjE3MTgxMTA3MzN9.yiflcayCbqEWH-HxlZxzCClG3yQOm_COIypJjX0vsqo';

  //fetch chatrooms

  //fetch chatrooms

  //execute fatchChatrooms
  ngOnInit() {
    console.log("yoo what's up");
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
      });
  }
  //send request
}

/*

<p>the chatrooms :</p>
<div *ngFor="let chatroom of chatrooms">
  <div class="chatroom">
    <div
      class="photo"
      [style.background-image]="'url(' + chatroom.photo + ')'"
    ></div>
    <div class="infos">
      <p class="name">{{ chatroom.collaboratorMatricule }}</p>
    </div>
  </div>
</div>

*/
