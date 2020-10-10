import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


import { usuario_routes } from './components/usuario/usuario.routes'; // Arregos de rutas hijas


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
     {
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: usuario_routes
     },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

// export const routes: Routes = [
//     { path: 'home', component: HomeComponent },
//      {
//         path: 'usuario/:id',
//         component: UsuarioComponent,
//         children: [
//             { path: 'nuevo', component: NuevoUsuarioComponent },
//             { path: 'editar', component: NuevoUsarioDetalleComponent },
//             { path: 'detalle', component: NuevoUsarioEditarComponent },
//             { path: '**', pathMatch: 'full', redirectTo: 'nuevo' } // Cualquier Clase que no sea las anteriores, redireccioname a nuevo

//         ]
//      },
//     { path: '**', pathMatch: 'full', redirectTo: 'home' }

// ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
