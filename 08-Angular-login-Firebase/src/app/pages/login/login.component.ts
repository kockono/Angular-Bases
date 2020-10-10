import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  usuario:UsuarioModel;
  recordarme = false;

  ngOnInit() {
    this.usuario = new UsuarioModel();
    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email')
      this.recordarme = true;
    }
  }

  login(form: NgForm){
    if (form.invalid) return

    if(this.recordarme){
      localStorage.setItem('email',this.usuario.email)
    }

    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      text: 'Espere porfavor',
      footer: '<a href>Why do I have this issue?</a>'
    })
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(resp => {

        Swal.close();
        this.router.navigateByUrl('/home');


    }, err =>{
      Swal.fire({
        allowOutsideClick:false,
        icon: 'error',
        text: err.error.error.message,
        footer: '<a href>Why do I have this issue?</a>'
      })
      console.log(err.error.error.message);
    })

  }

}
