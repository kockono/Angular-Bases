import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interface/mensaje.interface'
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chats: any[] = [];
  public usuario: any = {};

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  constructor(private afs: AngularFirestore, public auth: AngularFireAuth) { 

    this.auth.authState.subscribe( user => {
      console.log('Estado Del Usuario', user);
      if(!user){
         return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;

    })
  }


  login(proveedor:string) {
    this.usuario = {}; // Borramos todas las propiedades
    if(proveedor = "google")
      this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    if(proveedor = "twitter")
      this.auth.signInWithPopup(new auth.TwitterAuthProvider());

  }

  // login() {
  //   this.auth.signInWithPopup(new auth.FacebookAuthProvider.GoogleAuthProvider());
  // }

  logout() {
    this.auth.signOut();
  }


  cargarMensajes() { //Del servicio de afs (angulrar fire store) de la collection chats traime los items 'asc' 'desc'
    this.itemsCollection = this.afs.collection<any>('chats', ref => ref.orderBy('fecha','desc').limit(5) ); 

                    //Los observables tienen la funcion subscribe
    return this.itemsCollection.valueChanges().pipe(map((mensajes:Mensaje[]) => {
                                                        this.chats = [] ;
                                                        for (let mensaje of mensajes) {
                                                          this.chats.unshift( mensaje ) //Vamos ordenar los mensajes, Unshift Inserta el dato
                                                        }
                                                        return this.chats;
                                                      }))
                               
  }

  agregarMensaje(texto:string) {
      let mensaje: Mensaje = {
        
        nombre: this.usuario.nombre,
        mensaje: texto,
        fecha: new Date().getTime(),
        uid: this.usuario.uid
      }

      return this.itemsCollection.add( mensaje );
  }

}
