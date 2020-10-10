import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { NgClassesComponent } from './components/ng-classes/ng-classes.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario.component';
import { NuevoUsarioEditarComponent } from './components/usuario/nuevo-usario-editar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NuevoUsarioDetalleComponent } from './components/usuario/nuevo-usario-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    NuevoUsuarioComponent,
    NuevoUsarioEditarComponent,
    NavbarComponent,
    NuevoUsarioDetalleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
