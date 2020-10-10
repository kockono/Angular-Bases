import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: String;

  constructor(private route: ActivatedRoute, public productoService:ProductosService) { }

  ngOnInit() { // Entra a servicios de produtos usa el metodo get que pasaremos como parametro una id 
    this.route.params // La ruta contiene el nombre del producto que definimos en rutas como /id: que seria el nombre
    .subscribe(parametros => { // Ejemplo Prod-2, que estamos usando por debajo como parametro
      this.productoService.getProductos(parametros['id']) // Mas adelante tiene formato.json que contiene toda la informacion del producto
      .subscribe((producto:ProductoDescripcion) => {
          this.id = parametros['id'];
          this.producto = producto;
          
      })
    })
  }
}
