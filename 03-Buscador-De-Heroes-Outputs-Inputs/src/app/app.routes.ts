import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'heroes', component: HeroesComponent },
{ path: 'heroe/:id', component: HeroeComponent },
{ path: 'buscar/:objetoBuscado', component: BuscadorComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];
//! Aqui manejamos las rutas con su respectivo nombre hacia donde quieres que te dirijan.
//! Por ejemplo si se selecciona "home" concatenera la palabra home en la barra
//! Quedaria algo asi "http://localhost:4200/home" o si fuera about seria "http://localhost:4200/about"
//! Concatena la direccion utilizando la libreria "import { RouterModule, Routes } from '@angular/router'"

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
