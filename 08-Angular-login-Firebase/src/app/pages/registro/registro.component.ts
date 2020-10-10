import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:UsuarioModel = new UsuarioModel();;
  recordarme = false;


  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() { 

  }

  onSubmit(form: NgForm){
    if (form.invalid) return
    
    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      text: 'Espere porfavor',
      footer: '<a href>Why do I have this issue?</a>'
    })
    Swal.showLoading();

    this.auth.registrarUsuario(this.usuario).subscribe(res => {
      Swal.close();
      this.router.navigateByUrl('/home');

      
    if(this.recordarme){
      localStorage.setItem('email',this.usuario.email)
    }

    }, (err) => {
      Swal.fire({
        allowOutsideClick:false,
        icon: 'error',
        text: err.error.error.message,
        footer: '<a href>Why do I have this issue?</a>'
      })
    })

  }

}
