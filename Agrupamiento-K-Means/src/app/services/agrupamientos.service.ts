import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgrupamientosService {
  k            = 3 //# Numero de clusteres
  dimension    = 4 //# Numero valores dentro del arreglo
  iteraciones  = 3  //# Numero de veces que actualizara el centro

  centro_1:number[];
  centro_2:number[];
  centro_3:number[];
  matrizes = [];

  minimos2 = []
  data = [
  [7,	8,	4,	5,	2],
  [6,	8,	5,	4,	2],
  [8,	9,	7,	8,	9],
  [6,	7,	7,	7,	8],
  [1,	2,	5,	3,	4],
  [3,	4,	5,	3,	5],
  [7,	8,	8,	6,	6],
  [8,	9,	6,	5,	5],
  [2,	3,	5,	6,	5],
  [1,	2,	4,	4,	2],
  [3,	2,	6,	5,	7],
  [2,	5,	6,	8,	9],
  [3,	5,	4,	6,	3],
  [3,	5,	5,	6,	3],
  ]

  constructor() { 
    this.calcularDistancias();
  }

  calcularDistancias(centro_1 = this.data[3], centro_2 = this.data[10], centro_3 = this.data[12]){
    let  valor_final_absoluto_1      = 0.0
    let  valor_final_absoluto_2      = 0.0
    let  valor_final_absoluto_3      = 0.0
    
    let matriz_distancia_1 = []
    let matriz_distancia_2 = []
    let matriz_distancia_3 = []

    let valor_absoluto_1:any
    let valor_absoluto_2:any
    let valor_absoluto_3:any


    // console.info(`Centro 1: ${centro_1}`);
    // console.info(`Centro 2: ${centro_2}`);
    // console.info(`Centro 3: ${centro_3}`);

    this.centro_1 = centro_1;

    for (let index = 0; index < this.data.length; index++) {
        for (let subIndex = 0; subIndex < centro_1.length; subIndex++) {
          valor_absoluto_1 = Math.abs(centro_1[subIndex] - this.data[index][subIndex])
          valor_absoluto_1 = valor_absoluto_1

          valor_absoluto_2 = Math.abs(centro_2[subIndex] - this.data[index][subIndex])
          valor_absoluto_2 = valor_absoluto_2

          valor_absoluto_3 = Math.abs(centro_3[subIndex] - this.data[index][subIndex])
          valor_absoluto_3 = valor_absoluto_3

          valor_final_absoluto_1    += valor_absoluto_1;
          valor_final_absoluto_2    += valor_absoluto_2;
          valor_final_absoluto_3    += valor_absoluto_3;
        }

        matriz_distancia_1.push(valor_final_absoluto_1);
        matriz_distancia_2.push(valor_final_absoluto_2);
        matriz_distancia_3.push(valor_final_absoluto_3);

        valor_final_absoluto_1 = 0
        valor_final_absoluto_2 = 0
        valor_final_absoluto_3 = 0   
    }

    
    this.matrizes.push(matriz_distancia_1, matriz_distancia_2, matriz_distancia_3)
    this.minimos2 = this.calcularMinimoMaximo(matriz_distancia_1, matriz_distancia_2, matriz_distancia_3)
    this.matrizes.push(this.minimos2, ' Minimos 2')
    return this.matrizes;
  }

  calcularMinimoMaximo(matriz_1, matriz_2, matriz_3) {
    let maximo   = 0
    let promedio = 0
    let minimoDeMinimos = 0
    let minimos = []

    for (let i = 0; i < matriz_1.length; i++) {
      let temporal = [];
      temporal.push(matriz_1[i], matriz_2[i], matriz_3[i]);
      minimoDeMinimos = Math.min(...temporal);
      minimos.push(minimoDeMinimos);
    }
    // console.info(this.minimos);
    return minimos;
    // maximo = Math.max(...minimos)
    // minDeMinimos = Math.min(...minimos)


  }

}

// calcularMinMax(matriz_1, matriz_2) {
//   let minimo = []
//   let maximo   = 0
//   let promedio = 0
//   let minDeMinimo = 0

//   for (let i = 0; i < matriz_1.length; i++) {
//     if (matriz_1[i] > matriz_2[i])
//       minimo.push(matriz_2[i])
//      else
//       minimo.push(matriz_1[i])
//   }
  
//   maximo = Math.max(...minimo)
//   minDeMinimo = Math.min(...minimo)
  
//   for (let i = 0; i < minimo.length; i++) {
//     promedio += minimo[i]
    
//   }  
//   promedio = promedio/matriz_1.length()

//   }


//  moverCentros(maximo, minimo, promedio, minDeMinimo) {
//   let mini = 0
//   let maxi = 0
//   let prom = 0

//   let clusterNumbers = []
//   let clusterMiniNumber = 0
//   let clusterMaxiNumber = 0

//   for (let i = 0; i < minimo.length; i++) {
//     mini = minDeMinimo - minimo[i]
//     maxi = maximo - minimo[i]

//     mini = Math.abs(mini)
//     maxi = Math.abs(maxi)

//     if(i == 0){

//       if(mini < maxi){
//         clusterMiniNumber = 1
//         clusterMaxiNumber = 2
//         clusterNumbers.push(1)
//       } else{
//         clusterMaxiNumber = 1
//         clusterMiniNumber = 2
//         clusterNumbers.push(1)
//       }
          
//     }
//     if(clusterMiniNumber == 1 && i != 0)
//         if(mini < maxi)
//             clusterNumbers.push(1)
//         else
//             clusterNumbers.push(2)

//     if(clusterMaxiNumber == 1 && i != 0)
//         if(mini > maxi)
//             clusterNumbers.push(1)
//         else
//             clusterNumbers.push(2)

//   console.log(clusterNumbers + '\n')
//   this.nuevosClusters(minimo, clusterNumbers)
//   }
//  }

//  nuevosClusters(minimo, clusterNumbers) {
//   let centroNew_1 = []
//   let centroNew_2 = []
  
//   for (let i = 0; i < minimo.length; i++) {
//     if(clusterNumbers[i] == i) {
//       centroNew_1.push(this.data[i])
//     } else {

//     }
//   }
//  }