import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

/*@ts-ignore */
@Component({
  selector: 'app-admin-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-chat.component.html',
  styleUrl: './admin-chat.component.css',
})
export class AdminChatComponent {
  chatrooms: any = []

  backend: string = 'http://localhost:3001/chatroom'

  tokenExample: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODc2IiwiaWF0IjoxNzE3OTYwMDg4LCJleHAiOjE3MTg1NjQ4ODh9.3GLFSkq1z8cZYnHhNgNKeZG5Vwnsm9d1-7FmrxG30ic'

  ngOnInit() {
    console.log("yoo what's up")
    fetch(this.backend, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenExample}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.chatrooms = data
      })
  }
}
