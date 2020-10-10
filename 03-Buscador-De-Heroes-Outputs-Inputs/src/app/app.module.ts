import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// !Routes el direccionamiento de rutas, cuando hacemos click o enter o un evento a donde quiere que nos dirigamos
// !En este caso tenemos 1 archivo que maneja todas las rutas.
import {APP_ROUTING} from './app.routes';

// !Services los servicios en este caso usamos 1 servicio para el filtrado de los Json.
import { HeroesService } from './components/services/heroes.service';
// !Components Aqui se encuentran todos los componentes que importamos, "Codigo segmentado en archivos"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({ //Todo| Como su nombre lo dice son los módulos que hemos importado desde el componente
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [ //Todo| Son los servicios que vienen de Angular
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTING
  ],
  //Todo| Aquí Iran Todos Los Servicios
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
