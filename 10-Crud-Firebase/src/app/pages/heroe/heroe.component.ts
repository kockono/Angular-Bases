import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { heroeModel } from '../../models/heroe.model';

import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent implements OnInit {

  heroe = new heroeModel();

  constructor(private heroeService:HeroesService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if(id !== 'nuevo') {
      this.heroeService.getHeroe(id).subscribe((resp:heroeModel) => {
        this.heroe = resp;
        this.heroe.id = id;
      })
    }

  }

  guardar(formulario: NgForm) {

    if(formulario.invalid) { 
      console.log('Formulario No valido'); 
      return
    }

    Swal.fire({
      title:'Espere',
      text:'GUardando Información',
      allowOutsideClick: false,
      icon:'info',
      showConfirmButton: false
    })

    Swal.showLoading();


    let peticion: Observable<any>;

    if( this.heroe.id) {
      peticion = this.heroeService.actualizarHeroe( this.heroe );
    } else {
      peticion = this.heroeService.crearHeroe(this.heroe);
    }

      peticion.subscribe(resp => {

        Swal.fire({
          title: this.heroe.nombre,
          text:'Se actualizó correctamente',
          icon: 'success'
        })

      })
  }


}
