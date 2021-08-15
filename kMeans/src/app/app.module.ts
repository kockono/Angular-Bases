import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgrupamientoComponent } from './components/agrupamiento/agrupamiento.component';
import { ChartsModule } from 'ng2-charts';
// import { chart, registerables } from 'char.js';

@NgModule({
  declarations: [
    AppComponent,
    AgrupamientoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
