import { AgrupamientosService } from './../../services/agrupamientos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agrupamiento',
  templateUrl: './agrupamiento.component.html',
  styleUrls: ['./agrupamiento.component.css']
})
export class AgrupamientoComponent implements OnInit {
  k            = 3  //# Numero de clusteres
  dimension    = 4  //# numero valores dentro del arreglo
  iteraciones  = 3  //# Numero de veces que actualizara el centro

    valoresAbsolutos:any = [];
    valoresAbsolutos1:number[]
    valoresAbsolutos2:number[]
    valoresAbsolutos3:number[]
    valoresMinimos:number[]
    numero_del_cluster_asignado:number[]

    nuevoCluster_1 = [];
    nuevoCluster_2 = [];
    nuevoCluster_3 = [];

    letras:string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];
    numbers = [1,1,3,4,5,6,7,8,9,10,11,12,13,14]

  constructor(private agrupamientosService:AgrupamientosService) { }

  ngOnInit(): void {
    this.valoresAbsolutos = this.agrupamientosService.calcularDistancias().map((res:any) => {
      return res;
    });
    this.valoresAbsolutos1 = this.valoresAbsolutos[0];
    this.valoresAbsolutos2 = this.valoresAbsolutos[1];
    this.valoresAbsolutos3 = this.valoresAbsolutos[2];
    this.valoresMinimos = this.valoresAbsolutos[3];
    this.numero_del_cluster_asignado = this.valoresAbsolutos[4];
    this.nuevoCluster_1 = this.valoresAbsolutos[5]
    this.nuevoCluster_2 = this.valoresAbsolutos[6]
    this.nuevoCluster_3 = this.valoresAbsolutos[7]
    
  }

}

