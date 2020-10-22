import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatService } from './providers/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public chats: Observable<any[]>;
  
  constructor(public _chatService:ChatService) {

    
  }

}
