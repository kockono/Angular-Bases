import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { ReactiveMejoradoComponent } from './pages/reactive-mejorado/reactive-mejorado.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent},
  { path: 'reactivo', component: ReactiveComponent},
  { path: 'reactivo-mejorado', component: ReactiveMejoradoComponent},
  { path: '**', pathMatch: 'full', redirectTo:'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
