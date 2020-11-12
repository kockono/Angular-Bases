import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [HomeComponent, PeliculasComponent, BuscarComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
