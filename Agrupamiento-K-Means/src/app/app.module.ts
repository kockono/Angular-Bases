import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgrupamientoComponent } from './components/agrupamiento/agrupamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    AgrupamientoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
