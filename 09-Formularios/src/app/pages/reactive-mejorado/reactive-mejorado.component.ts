import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-mejorado',
  templateUrl: './reactive-mejorado.component.html',
  styleUrls: ['./reactive-mejorado.component.css']
})
export class ReactiveMejoradoComponent implements OnInit {

  forma: FormGroup;



  constructor(private fb:FormBuilder) {

    this.crearFormulario();

  }

  ngOnInit(): void {
  }


  // Nuevo Formato
  campoNoValido(campo: string) {
      return this.forma.get(`${campo}`)?.invalid && this.forma.get(`${campo}`)?.touched;
  }


  smallCampoValido(campo: string){

    if(this.forma.get(campo).value.length == 1)
      return 'Faltan 4 caracteres'
    if(this.forma.get(campo).value.length == 2)
      return 'Faltan 3 caracteres'
    if(this.forma.get(campo).value.length == 3)
      return 'Faltan 2 caracteres'
    if(this.forma.get(campo).value.length == 4)
      return 'Falta 1 caracter'
    else
      return ''
  }


  crearFormulario(){

    this.forma = this.fb.group({ // Objeto de JS
       nombre   : ['', Validators.required],
       apellido : ['', [Validators.required,Validators.minLength(5)]],
       correo   : ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
       direccion: this.fb.group({
         distrito: ['', Validators.required],
         ciudad  : ['', Validators.required],
          municipio: this.fb.group({
            colonia: ['', Validators.required],
            calle  : ['', Validators.required]
         })
       })
    })

  }

  guardar(){
    console.log(this.forma);
    if(this.forma.invalid){
      Object.values(this.forma.controls).forEach( control => { // Del ngForm los objetos y valores de los control revisa si han sido tocados
        console.log(control);
        control.markAsTouched();
      })
      return
    }
  }
}
