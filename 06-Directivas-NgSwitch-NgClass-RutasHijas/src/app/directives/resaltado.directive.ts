import { Directive, ElementRef,HostListener, Input } from '@angular/core';
// HostLinestener Que es lo que quiero escuchar
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private element:ElementRef) { 
    console.log("Directiva Llamada");
    // element.nativeElement.style.backgroundColor ="yellow";


  }

  // @HostListener('mouseout') MouseOut() {
  //     this.element.nativeElement.style.backgroundColor = "yellow"
  // }
  @Input("appResaltado") nuevoColor:string; // Esta variable viene de afuera 

  @HostListener('mouseenter') MouseEntro() { // El dato de alado es un alias
    this.resaltar(this.nuevoColor || 'yellow'); // Le pasa como parametro el nuevo color del input que recibe del html si no amarillo
  }

  @HostListener('mouseleave') MouseSalio() {
    this.element.nativeElement.style.backgroundColor = null;
  }

  private resaltar(color:string) {
    this.element.nativeElement.style.backgroundColor = color;

  }

}
