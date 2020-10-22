import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  mensaje:string = "";
  elemento:any;

  constructor(public _chatService:ChatService) {
    this._chatService.cargarMensajes()
                      .subscribe( () => {
                        setTimeout(() => {
                          this.elemento.scrollTop = this.elemento.scrollHeight;
                        }, 50);
                      });
   }


  enviar_mensaje() {
    console.log(this.mensaje);
    if(this.mensaje.length == 0 ){
      return;
    }
    this._chatService.agregarMensaje( this.mensaje )
                     .then( () => this.mensaje = "" )
                     .catch( (err) => console.error('Erro Al Enviar', err))

  }

}
