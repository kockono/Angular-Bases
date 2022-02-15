import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { NgxPhotoEditorModule } from "ngx-photo-editor";


@NgModule({
  declarations: [
    AppComponent,
    PhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPhotoEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]


})
export class AppModule { }
