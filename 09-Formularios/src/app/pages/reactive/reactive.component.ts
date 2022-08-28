import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray,FormControl } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent implements OnInit {

  forma: FormGroup;



  constructor(private fb:FormBuilder, private validador: ValidadoresService) {

    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();

  }



  ngOnInit(): void {
  }

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray //Es un arra de form
  }

  // Nuevo Formato
  get nombreNoValido() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido() {
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido').touched;
  }

  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }
  get usuarioNoValido() {
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }

  get distritoNoValido() {
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched;
  }

  get ciudadNoValida() {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }

  get password1NoValido() {
    return this.forma.get('password1').invalid && this.forma.get('password1').touched;
  }

  get password2NoValido() {
    const pasword1 = this.forma.get('password1').value;
    const pasword2 = this.forma.get('password2').value;

    return (pasword1 === pasword2) ? false : true;
  }

  get smallNombreValido(){

    if(this.forma.get('nombre').value === null ) return

    if(this.forma.get('nombre').value.length == 1)
      return 'Faltan 4 caracteres'
    if(this.forma.get('nombre').value.length == 2)
      return 'Faltan 3 caracteres'
    if(this.forma.get('nombre').value.length == 3)
      return 'Faltan 2 caracteres'
    if(this.forma.get('nombre').value.length == 4)
      return 'Falta 1 caracter'
    else
      return ''
  }


  agregarPasaTiempo(){
    this.pasatiempos.push(this.fb.control('Nuevo elemento', Validators.required))
  }

  borrarPasaTiempos(i: number){
    this.pasatiempos.removeAt(i); //Remueve atraves de saber el index
  }

  // crearFormulario(){ //!Antiguo

  //   this.forma = this.fb.group({ // Objeto de JS
  //      nombre   : ['', [Validators.required, this.validador.noUsarNombreChris]],
  //      apellido : ['', [Validators.required,Validators.minLength(5)]],
  //      correo   : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  //      usuario  : ['', ,this.validador.existeUsuario], // Promesa Asyncrona, es el 3er argumento del control
  //      password1: ['', Validators.required],
  //      password2: ['', Validators.required],
  //      direccion: this.fb.group({
  //        distrito: ['', Validators.required],
  //        ciudad  : ['', Validators.required],
  //         municipio: this.fb.group({
  //           colonia: ['', Validators.required],
  //           calle  : ['', Validators.required]
  //        })
  //      }),
  //       pasatiempos: this.fb.array([]) //Un arreglo del formulario
  //   },{
  //     validators: this.validador.passwordsIguales('password1','password2')
  //   });

  // }

  crearFormulario(){

    this.forma = new FormGroup({ // Objeto de JS
       nombre    : new FormControl('', [Validators.required, this.validador.noUsarNombreChris]),
       apellido  : new FormControl('', [Validators.required,Validators.minLength(5)]),
       correo    : new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
       usuario   : new FormControl('', this.validador.existeUsuario), // Promesa Asyncrona, es el 3er argumento del control
       password1 : new FormControl('', Validators.required),
       password2 : new FormControl('', Validators.required),
       direccion : new FormGroup({
         distrito : new FormControl('', Validators.required),
         ciudad   : new FormControl('', Validators.required),
           municipio : new FormGroup({
            colonia   : new FormControl('', Validators.required),
            calle     : new FormControl('', Validators.required)
         })
       }),
        pasatiempos: this.fb.array([]) //Un arreglo del formulario
    },{
      // validators: this.validador.passwordsIguales('password1','password2')
    });
  }

  crearListeners() {
    // this.forma.valueChanges.subscribe( valor => { //!Cada cambio que se hace en el forma te lo muesntra
    //     console.log(valor);
    // })

    // this.forma.statusChanges.subscribe( status => { //!El estatus del formulario
    //   console.log(status);
    // })

    this.forma.get('nombre').valueChanges.subscribe(console.log); //Imprime cada cambio que se haga en el nombre

  }

  cargarDataAlFormulario() {
    // this.forma.setValue({
    this.forma.reset({
      nombre: 'Juanita',
      apellido: 'Perez',
      correo: 'juan@gmail.com',
      password1: '123',
      password2: '123',
      direccion: {
        distrito: 'Ontario',
        ciudad: 'Otawa',
          municipio: {
            colonia: 'Voluntad',
            calle: 'Integral'
        }
      }
    });
    // ['comer', 'dormir'].forEach(valor => this.pasatiempos.push(this.fb.control(valor))); Rellenar el arreglo
  }

  guardar(){
    console.log(this.forma);

    if(this.forma.invalid) { //Object.values tiene como referencia lo que llamamos DOM en Js
       Object.values(this.forma.controls).forEach( control => { // Del ngForm los objetos y valores de los control revisa si han sido tocados

        if(control instanceof FormGroup) { //Dime si control es una instancia de FourmGroup
          Object.values(control.controls).forEach( control => control.markAsTouched())
        } else {
          control.markAsTouched()
        }

      })

    }

    // Posteo de información
    // this.forma.reset({
    //   nombre: 'Sin Nombre'
    // });
  }

}
