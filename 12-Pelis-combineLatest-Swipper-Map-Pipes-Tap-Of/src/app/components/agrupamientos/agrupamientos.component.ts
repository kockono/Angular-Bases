import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agrupamientos',
  templateUrl: './agrupamientos.component.html',
  styleUrls: ['./agrupamientos.component.css']
})
export class AgrupamientosComponent implements OnInit {
  k            = 3 //# Numero de clusteres
  dimension    = 4 //# numero valores dentro del arreglo
  valorMaximo  = 9 //# Valor maximo del random
  iteraciones  = 3  //# Numero de veces que actualizara el centro



  data = [
    [5.1, 3.5, 1.4,	0.2], // #Azul
    [4.9, 3.0, 1.4, 0.2], // #Azul
    [7.0, 3.2, 4.7, 1.4], // #Blanco
    [6.4, 3.2, 4.5, 1.5], // #Blanco
    [6.3, 3.3, 6.0, 2.5], // #Blanco
    [5.8, 2.7, 5.1, 1.9]  // #Blanco
]
  constructor() { }

  ngOnInit(): void {
  }

  calcularDistancias(centro_1 = this.data[2], centro_2 = this.data[5]){
    let  valor_final_1      = 0.0
    let  valor_final_2      = 0.0
    
    let matriz_distancia_1 = []
    let matriz_distancia_2 = []

    let valor_absoluto_1:any
    let valor_absoluto_2:any

    for (let index = 0; index < this.data.length; index++) {
        for (let subIndex = 0; subIndex < centro_1.length; subIndex++) {
          valor_absoluto_1 = Math.abs(centro_1[subIndex] - this.data[index][subIndex])
          valor_absoluto_1 = valor_absoluto_1.toFixed(2)

          valor_absoluto_2 = Math.abs(centro_2[subIndex] - this.data[index][subIndex])
          valor_absoluto_2 = valor_absoluto_2.toFixed(2)
        }
        valor_final_1    += valor_absoluto_1;
        valor_final_2    += valor_absoluto_2;
        matriz_distancia_1.push(valor_final_1.toFixed(2));
        matriz_distancia_2.push(valor_final_2.toFixed(2));
    }
    valor_final_1 = 0
    valor_final_2 = 0

    this.calcularMinMax(matriz_distancia_1, matriz_distancia_2)

  }

  calcularMinMax(matriz_1, matriz_2) {
    let minimo = []
    let maximo   = 0
    let promedio = 0
    let minDeMinimo = 0

    for (let i = 0; i < matriz_1.length; i++) {
      if (matriz_1[i] > matriz_2[i])
        minimo.push(matriz_2[i])
       else
        minimo.push(matriz_1[i])
    }
    
    maximo = Math.max(...minimo)
    minDeMinimo = Math.min(...minimo)
    
    for (let i = 0; i < minimo.length; i++) {
      promedio += minimo[i]
      
    }  
    promedio = promedio/matriz_1.length()

    }


   moverCentros(maximo, minimo, promedio, minDeMinimo) {
    let mini = 0
    let maxi = 0
    let prom = 0

    let clusterNumbers = []
    let clusterMiniNumber = 0
    let clusterMaxiNumber = 0

    for (let i = 0; i < minimo.length; i++) {
      mini = minDeMinimo - minimo[i]
      maxi = maximo - minimo[i]

      mini = Math.abs(mini)
      maxi = Math.abs(maxi)

      if(i == 0){

        if(mini < maxi){
          clusterMiniNumber = 1
          clusterMaxiNumber = 2
          clusterNumbers.push(1)
        } else{
          clusterMaxiNumber = 1
          clusterMiniNumber = 2
          clusterNumbers.push(1)
        }
            
      }
      if(clusterMiniNumber == 1 && i != 0)
          if(mini < maxi)
              clusterNumbers.push(1)
          else
              clusterNumbers.push(2)

      if(clusterMaxiNumber == 1 && i != 0)
          if(mini > maxi)
              clusterNumbers.push(1)
          else
              clusterNumbers.push(2)

    console.log(clusterNumbers + '\n')
    //console.log(newCentro_1)
    //console.log(newCentro_2)
    this.nuevosClusters(minimo, clusterNumbers)
    }
   }

   nuevosClusters(minimo, clusterNumbers) {
    let centroNew_1 = []
    let centroNew_2 = []
    
    for (let i = 0; i < minimo.length; i++) {
      if(clusterNumbers[i] == i) {
        centroNew_1.push(this.data[i])
      } else {

      }
    }
   }

}

