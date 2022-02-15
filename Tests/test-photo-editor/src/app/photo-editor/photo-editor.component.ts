import { Component, OnInit } from '@angular/core';
import {CroppedEvent} from 'ngx-photo-editor';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  base64: any;
  imageChangedEvent: any;

  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
  }


  imageCropped(event: CroppedEvent) {
    console.log(event);
    this.base64 = event.base64;
  }


}
