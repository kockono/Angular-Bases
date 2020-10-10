import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-ng-style></app-ng-style>
  <br>

  <app-css></app-css>
  <br>

  <app-ng-classes></app-ng-classes>
  <br>

  <h1>Directivas</h1> 
  <p appResaltado >Hola Mundo</p>
  <p [appResaltado]="'orange'" >Hola Mundo</p> 
  <br>

  <h1>*ngSwitch</h1>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges,
             OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {

  constructor() { 
    console.log("Constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");

  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }


}
