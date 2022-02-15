import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';

const routes: Routes = [
  {path: '', component: PhotoEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
