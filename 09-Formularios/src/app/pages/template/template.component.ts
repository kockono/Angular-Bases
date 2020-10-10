import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  paises: any[] = [];

  constructor(private paisService:PaisService) { }

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais:'',
    genero:'F'
  }


  ngOnInit(): void {
    this.paisService.getPaises().subscribe(res => {
      this.paises = res;
      console.log(this.paises);

      this.paises.unshift({ // Agrega elementos en un arreglo vacio, valor por defecto en la primera posiciíon
        nombre: '[ Seleccione Pais ]',
        codigo: ''
      })

     })
  }

  guardar(formulario: NgForm){
    
    if(formulario.invalid){
      Object.values(formulario.controls).forEach( control => { // Del ngForm los objetos y valores de los control revisa si han sido tocados
        console.log(control);
        control.markAsTouched();
      })
      return
    }

  }


}
