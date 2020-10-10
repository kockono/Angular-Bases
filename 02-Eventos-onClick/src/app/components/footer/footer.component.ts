import { Component} from '@angular/core';

@Component({
  selector: 'app-footer', // Etiquieta
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio: number;
  constructor() {
    this.anio = new Date().getFullYear();
  }
}
