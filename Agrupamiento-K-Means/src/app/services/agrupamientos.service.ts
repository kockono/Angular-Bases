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
  

  nuevosCentros_1 =[]
  nuevosCentros_2 =[]
  nuevosCentros_3 =[]

  numero_de_clusters_asignado:number[]

  matrizes = [];


  minimos2 = []
  data = [
            [7,	8,	4,	5,	2],
            [6,	8,	5,	4,	2],
            [8,	9,	7,	8,	9],
            [6,	7,	7,	7,	8], // Este grupo
            [1,	2,	5,	3,	4],
            [3,	4,	5,	3,	5],
            [7,	8,	8,	6,	6],
            [8,	9,	6,	5,	5],
            [2,	3,	5,	6,	5],
            [1,	2,	4,	4,	2],
            [3,	2,	6,	5,	7], // Este
            [2,	5,	6,	8,	9],
            [3,	5,	4,	6,	3], // Este
            [3,	5,	5,	6,	3],
          ]

// Cluster 1 =  [6,	7,	7,	7,	8]
// Cluster 2 =  [3,	2,	6,	5,	7]
// Cluster 3 =  [3,	5,	4,	6,	3]


  constructor() { 
    this.calcularDistancias();
  }

  calcularMultiplesIteraciones(nuevosCentros_1, nuevosCentros_2, nuevosCentros_3) {

        return this.calcularDistancias(nuevosCentros_1, nuevosCentros_2, nuevosCentros_3);

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
    this.matrizes.push(this.minimos2);
    this.matrizes.push(this.numero_de_clusters_asignado);
    this.matrizes.push(this.nuevosCentros_1,this.nuevosCentros_2,this.nuevosCentros_3)

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
      promedio += minimoDeMinimos
    }
    minimoDeMinimos = Math.min(...minimos);
    promedio = promedio/minimos.length
    maximo = Math.max(...minimos)
    // console.log(maximo);
    // console.log(promedio)

    this.numero_de_clusters_asignado = this.moverCentros(promedio, maximo, minimos, minimoDeMinimos)
    return minimos;


  }

  moverCentros(promedio, maximo, minimos, minimoDeMinimos) {
    let mini  = []
    let maxi  = []
    let prom  = []
    let closteToZero = 0;

    let clusterNumbers = []

    let clusterMiniNumber = 0
    let clusterMaxiNumber = 0
    let clusterPromNumber = 0

    

    for (let i = 0; i < minimos.length; i++) {
        let temporal= []
        mini[0] = minimos[i] - minimoDeMinimos
        maxi[0] = minimos[i] - maximo
        prom[0] = minimos[i] - promedio

        mini[0] = Math.abs(mini[0]);
        maxi[0] = Math.abs(maxi[0]);
        prom[0] = Math.abs(prom[0]);

        let bandera_de_cluster_insertado = false;
        
        // console.log(mini,prom, maxi);
        
        closteToZero = Math.min(mini[0], prom[0], maxi[0])
        
        // Solo Dios y Chris pueden entender este código
        if(mini[0] == closteToZero && i == 0) { 
          clusterMiniNumber = 1;
          mini[1] = 1;
          clusterNumbers.push(1)
         }
        if(maxi[0] == closteToZero && i == 0) { 
          clusterMaxiNumber = 1; 
          maxi[1] = 1;
          clusterNumbers.push(1)

        }
        if(prom[0] == closteToZero && i == 0) { 
          clusterPromNumber = 1;
          prom[1] = 1;
          clusterNumbers.push(1)
        }
        

        if(mini[0] == closteToZero && i > 1 && clusterMiniNumber != 1 && clusterMiniNumber != 2) {
            if(clusterMaxiNumber != 2 && clusterPromNumber != 2) {
              clusterMiniNumber = 2; 
              mini[2] = 2;
            }
          }
        if(maxi[0] == closteToZero && i > 1 && clusterMaxiNumber != 1 && clusterMaxiNumber != 2) {
          if(clusterMiniNumber != 2 && clusterPromNumber != 2) { 
              clusterMaxiNumber = 2; 
              maxi[2] = 2;
            }
          }
        if(prom[0] == closteToZero && i > 1 && clusterPromNumber != 1 && clusterPromNumber != 2) { 
          if(clusterMiniNumber != 2 && clusterMaxiNumber != 2) {  
            clusterPromNumber = 2; 
            prom[2] = 2;
          }
        }

        if(mini[0] == closteToZero && i > 2 && clusterMiniNumber == 0) {
          clusterMiniNumber = 3; 
          mini[3] = 3;
        }
        if(maxi[0] == closteToZero && i > 2 && clusterMaxiNumber == 0) {
          clusterMaxiNumber = 3; 
          maxi[3] = 3;
        }
        if(prom[0] == closteToZero && i > 2 && clusterPromNumber == 0) {
          clusterPromNumber = 3; 
          prom[3] = 3;
        }
        
        if(mini[0] == closteToZero && i > 0 && mini[1] == 1) {
          clusterNumbers.push(1)
        }
        if(mini[0] == closteToZero && i > 0 && mini[2] == 2) {
          clusterNumbers.push(2)
        }
        if(mini[0] == closteToZero && i > 0 && mini[3] == 3) {
          clusterNumbers.push(3)
        }

        if(maxi[0] == closteToZero && i > 0 && maxi[1] == 1) {
          clusterNumbers.push(1)
        }
        if(maxi[0] == closteToZero && i > 0 && maxi[2] == 2) {
          clusterNumbers.push(2)
        }
        if(maxi[0] == closteToZero && i > 0 && maxi[3] == 3) {
          clusterNumbers.push(3)
        }

        if(prom[0] == closteToZero && i > 0 && prom[1] == 1) {
          clusterNumbers.push(1)
        }
        if(prom[0] == closteToZero && i > 0 && prom[2] == 2) {
          clusterNumbers.push(2)
        }
        if(prom[0] == closteToZero && i > 0 && prom[3] == 3) {
          clusterNumbers.push(3)
        }



      }

      // console.log(mini, maxi, prom);
      // console.log('Minimo', clusterMiniNumber);
      // console.log('Maximo', clusterMaxiNumber);
      // console.log('Promedio:',clusterPromNumber);
      // console.log(clusterNumbers)

      this.nuevosClusters(minimos, clusterNumbers)
      return clusterNumbers;
  }

  nuevosClusters(minimos, clusterNumbers) {
    let centroNew_1 = []
    let centroNew_2 = []
    let centroNew_3 = []

    let centro_actualizado_1 = [];
    let centro_actualizado_2 = [];
    let centro_actualizado_3 = [];
    
    let promedio_cluster_1 = 0;
    let promedio_cluster_2 = 0;
    let promedio_cluster_3 = 0;
    
    for (let i = 0; i < minimos.length; i++) {
      if(clusterNumbers[i] == 1) {
        centroNew_1.push(this.data[i])
      } 
      if(clusterNumbers[i] == 2) {
        centroNew_2.push(this.data[i])
      }
      if(clusterNumbers[i] == 3) {
        centroNew_3.push(this.data[i])
      }
    }
    // console.log(centroNew_1);
    // console.log(centroNew_2);
    // console.log(centroNew_3);

    // Sacar promedio de cada nuevo cluster
    for (let i = 0; i < centroNew_1[0].length; i++) {
      for (let j = 0; j < centroNew_1.length; j++) {
        promedio_cluster_1 += centroNew_1[j][i]
      }
      promedio_cluster_1 = promedio_cluster_1/centroNew_1.length
      centro_actualizado_1.push(promedio_cluster_1)
      promedio_cluster_1 = 0
    }

    for (let i = 0; i < centroNew_2[0].length; i++) {
      for (let j = 0; j < centroNew_2.length; j++) {
        promedio_cluster_2 += centroNew_2[j][i]
      }
      promedio_cluster_2 = promedio_cluster_2/centroNew_2.length
      centro_actualizado_2.push(promedio_cluster_2)
      promedio_cluster_2 = 0
    }


    for (let i = 0; i < centroNew_3[0].length; i++) {
      for (let j = 0; j < centroNew_3.length; j++) {
        promedio_cluster_3 += centroNew_3[j][i]
        
      }
      promedio_cluster_3 = promedio_cluster_3/centroNew_3.length
      centro_actualizado_3.push(promedio_cluster_3)
      promedio_cluster_3 = 0

    }
    
    // console.log(centro_actualizado_1);
    // console.log(centro_actualizado_2);
    // console.log(centro_actualizado_3);

    this.nuevosCentros_1 = centro_actualizado_1;
    this.nuevosCentros_2 = centro_actualizado_2;
    this.nuevosCentros_3 = centro_actualizado_3;

    return { centro_actualizado_1, centro_actualizado_2, centro_actualizado_3}
    
   }

}

