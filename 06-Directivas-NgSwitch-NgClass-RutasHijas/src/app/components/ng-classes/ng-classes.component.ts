import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-classes',
  templateUrl: './ng-classes.component.html',
  styles: []
})
export class NgClassesComponent implements OnInit {

  alerta:string = "alert-danger"
  loading:boolean = false;

  propiedades:any = {
    danger: true
  }

  constructor() { }

  ngOnInit() {
  }

  ejectuar(){
    this.loading = true;

      setTimeout(() => this.loading = false, 3000) 

  }


}
