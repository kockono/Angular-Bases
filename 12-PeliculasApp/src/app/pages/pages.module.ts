import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { BuscarComponent } from './buscar/buscar.component';

import { ComponentsModule } from './../components/components.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    HomeComponent, 
    BuscarComponent,
    PeliculasComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule { }
