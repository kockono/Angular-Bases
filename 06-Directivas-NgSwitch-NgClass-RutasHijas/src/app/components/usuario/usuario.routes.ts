import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NuevoUsuarioComponent } from '../../components/usuario/nuevo-usuario.component';
import { NuevoUsarioDetalleComponent } from '../../components/usuario/nuevo-usario-detalle.component';
import { NuevoUsarioEditarComponent } from '../../components/usuario/nuevo-usario-editar.component';




export const usuario_routes: Routes = [
    { path: '', component: NuevoUsuarioComponent },
    { path: 'nuevo', component: NuevoUsuarioComponent },
    { path: 'detalle', component: NuevoUsarioDetalleComponent },
    { path: 'editar', component: NuevoUsarioEditarComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'editar' } // Cualquier Clase que no sea las anteriores, redireccioname a nuevo


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(usuario_routes)],
    exports: [RouterModule]
})
export class Usuario_outes {}
