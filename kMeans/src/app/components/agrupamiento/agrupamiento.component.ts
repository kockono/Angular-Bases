// import { AgrupamientosService } from './../../services/agrupamientos.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-agrupamiento',
  templateUrl: './agrupamiento.component.html',
  styleUrls: ['./agrupamiento.component.css']
})
export class AgrupamientoComponent implements OnInit {
  k            = 3  //# Numero de clusteres
  dimension    = 4  //# numero valores dentro del arreglo
  iteraciones  = 3  //# Numero de veces que actualizara el centro


  contador_angel_contreras = 0;

  valoresAbsolutos:any = [];
  valoresAbsolutos1:any = []
  valoresAbsolutos2:any = []
  valoresAbsolutos3:any = []
  valoresMinimos:any = []
  numero_del_cluster_asignado:any = []

    nuevoCluster_1:any = [];
    nuevoCluster_2:any = [];
    nuevoCluster_3:any = [];

    allClusters_1:any = []
    allClusters_2:any = []
    allClusters_3:any = []


  centro_1:any =[];
  centro_2:any =[];
  centro_3:any =[];
  

  nuevosCentros_1:any =[]
  nuevosCentros_2:any =[]
  nuevosCentros_3:any =[]

  inicioCluster = true; // Esta variable hace que no se remplaze la primera tabla.

  cluter__1:any = [] // Primeros clusters
  cluter__2:any = []
  cluter__3:any = []

  numero_de_clusters_asignado:any = []

  minimos2:any = []
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

    valoresIniciaes_1:any = [] 
    valoresIniciaes_2:any = []        
    valoresIniciaes_3:any = []        

    valoresAbsolutos___1:any = []
    valoresAbsolutos___2:any = []
    valoresAbsolutos___3:any = []
    minimosDeLosClusteres_:any = []
    numeroDeClusterAsignado_:any = []

    valoresAbsolutos__1:any = []
    valoresAbsolutos__2:any = []
    valoresAbsolutos__3:any = []
    minimosDeLosClusteres:any = []
    numeroDeClusterAsignado :any= []

    letras:string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];
    numbers = [1,1,3,4,5,6,7,8,9,10,11,12,13,14]

    iteracioness:any = [];

    color:string = '';

    grupoFinal:any = []
    grupoFinal_2:any = []
    grupoFinal_3:any = []

    random_1:number= 0;
    random_2:number= 0;
    random_3:number= 0;

  constructor() { 
    
  }

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3, r: 20 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';



  ngOnInit(): void {
    this.inicio()
  }

  inicio() {

    let randomClusters = this.getRandoms()
    this.random_1 = randomClusters[0]
    this.random_2 = randomClusters[1]
    this.random_3 = randomClusters[2]
    
    this.valoresAbsolutos = this.calcularDistancias().map((res:any) => {
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
    if(this.cluter__1.length === 0 ) {
      this.cluter__1 = this.valoresAbsolutos[5]
      this.cluter__2 = this.valoresAbsolutos[6]
      this.cluter__3 = this.valoresAbsolutos[7]
    }
}

calcularDistancias(centro_1 = this.data[ this.random_1], centro_2 = this.data[this.random_2], centro_3 = this.data[this.random_3]){

  if(this.contador_angel_contreras == 0) {
    this.valoresIniciaes_1 = centro_1;
    this.valoresIniciaes_2 = centro_1;
    this.valoresIniciaes_3 = centro_1;
  }
  
  this.contador_angel_contreras++;

    let  valor_final_absoluto_1      = 0.0
    let  valor_final_absoluto_2      = 0.0
    let  valor_final_absoluto_3      = 0.0
    
    let matriz_distancia_1 = []
    let matriz_distancia_2 = []
    let matriz_distancia_3 = []

    let valor_absoluto_1:any
    let valor_absoluto_2:any
    let valor_absoluto_3:any
    let matrizes = [];

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

    
    matrizes.push(matriz_distancia_1, matriz_distancia_2, matriz_distancia_3)
    this.minimos2 = this.calcularMinimoMaximo(matriz_distancia_1, matriz_distancia_2, matriz_distancia_3)
    matrizes.push(this.minimos2);
    matrizes.push(this.numero_de_clusters_asignado);
    matrizes.push(this.nuevosCentros_1,this.nuevosCentros_2,this.nuevosCentros_3)
    return matrizes;
  }

  getRandoms() {
    var numbers = [];
      for (let i = 0; i < 3; i++) {
        var n =  Math.floor(Math.random() * 13) + 1;
        var check = numbers.includes(n);

      if(check === false) {
        numbers.push(n);
      } else {
        while(check === true){
          n = Math.floor(Math.random() * 13) + 1;
          check = numbers.includes(n);
            if(check === false){
              numbers.push(n);
            }
          }
        }
      }
  
      return  numbers
    }

  iterarKMeans(number:any) {
    
    number = number -1;
    this.iteracioness = Array(number).fill(4); // [4,4,4,4,4]
    // let 

      for (let i = 0; i < number; i++) {

        this.valoresAbsolutos = []
        this.valoresAbsolutos = this.calcularMultiplesIteraciones(this.nuevoCluster_1, this.nuevoCluster_2,this.nuevoCluster_3).map((res:any) => {
          return res;
        })

        this.nuevoCluster_1 = this.valoresAbsolutos[5]
        this.nuevoCluster_2 = this.valoresAbsolutos[6]
        this.nuevoCluster_3 = this.valoresAbsolutos[7]
        
        this.allClusters_1.push(this.nuevoCluster_1)
        this.allClusters_2.push(this.nuevoCluster_2)
        this.allClusters_3.push(this.nuevoCluster_3)

        this.valoresAbsolutos___1 = this.valoresAbsolutos[0]
        this.valoresAbsolutos___2 = this.valoresAbsolutos[1]
        this.valoresAbsolutos___3 = this.valoresAbsolutos[2]
        this.minimosDeLosClusteres_ = this.valoresAbsolutos[3]

        this.numeroDeClusterAsignado_ = this.valoresAbsolutos[4]

        this.valoresAbsolutos__1.push(this.valoresAbsolutos___1)
        this.valoresAbsolutos__2.push(this.valoresAbsolutos___2)
        this.valoresAbsolutos__3.push(this.valoresAbsolutos___3)
        
        this.minimosDeLosClusteres.push(this.minimosDeLosClusteres_)
        this.numeroDeClusterAsignado.push(this.numeroDeClusterAsignado_)
  
         
        if(i == number -1) { // Este if se activa en la ultima iteración
          enum Posicion {
            A = 0,
            B = 1,
            C = 2,
            D = 3,
            E = 4,
            F = 5,
            G = 6,
            H = 7,
            I = 8,
            J = 9,
            K = 10,
            L = 11,
            M = 12,
            N = 13
          }

          for (let f = 0; f < 14; f++) { // f es la posicion
            
            if(this.numeroDeClusterAsignado_[f] == 1 ) {
              this.grupoFinal.push(Posicion[f])
            }
            if(this.numeroDeClusterAsignado_[f] == 2 ) {
              this.grupoFinal_2.push(Posicion[f])
            }
            if(this.numeroDeClusterAsignado_[f] == 3 ) {
              this.grupoFinal_3.push(Posicion[f])
            }
          }


        }

       }// Aquí termina el for
       
      //  console.log(this.numeroDeClusterAsignado_);
      //  console.log(this.grupoFinal);
      //  console.log(this.grupoFinal_2);
      //  console.log(this.grupoFinal_3);
      //  console.log(this.valoresAbsolutos[0])
       console.log(this.valoresAbsolutos[1]) //V1
       console.log(this.valoresAbsolutos[2]) //V2
       console.log(this.valoresAbsolutos[3]) //V3
       
       console.log(this.valoresAbsolutos[4]); //CLUSTERS
       
       console.log('Centro 1',this.valoresAbsolutos[5]) // Centros 1
       console.log(this.valoresAbsolutos[6])    // Centros 2
       console.log(this.valoresAbsolutos[7])    // Centros 3
       
       var dataaa=[];
       var dataab=[];
       var dataac=[];
       for(let a =0;a<14;a++){
         if(this.valoresAbsolutos[4][a]== 1){
          dataaa.push({x: this.data[a][0], y:this.valoresAbsolutos[5][0]})
          dataaa.push({x: this.data[a][1], y:this.valoresAbsolutos[5][1]})
          dataaa.push({x: this.data[a][2], y:this.valoresAbsolutos[5][2]})
          dataaa.push({x: this.data[a][3], y:this.valoresAbsolutos[5][3]})
          dataaa.push({x: this.data[a][4], y:this.valoresAbsolutos[5][4]})
         }
         if(this.valoresAbsolutos[4][a]== 2){
          dataab.push({x: this.data[a][0], y:this.valoresAbsolutos[6][0]})
          dataab.push({x: this.data[a][1], y:this.valoresAbsolutos[6][1]})
          dataab.push({x: this.data[a][2], y:this.valoresAbsolutos[6][2]})          
          dataab.push({x: this.data[a][3], y:this.valoresAbsolutos[6][3]})
          dataab.push({x: this.data[a][4], y:this.valoresAbsolutos[6][4]})
         }
         if(this.valoresAbsolutos[4][a]== 3){
          dataac.push({x: this.data[a][0], y:this.valoresAbsolutos[7][0]})
          dataac.push({x: this.data[a][1], y:this.valoresAbsolutos[7][1]})
          dataac.push({x: this.data[a][2], y:this.valoresAbsolutos[7][2]})          
          dataac.push({x: this.data[a][3], y:this.valoresAbsolutos[7][3]})
          dataac.push({x: this.data[a][4], y:this.valoresAbsolutos[7][4]})
         }
       }
       this.scatterChartData=[];

       this.scatterChartData.push({
        label: "Grupo "+(1).toString(),
        data: dataaa,
        pointBackgroundColor:'#A6E2DC',
        backgroundColor: '#A6E2DC',
        pointRadius: 10,
      })
      this.scatterChartData.push({
        label: "Grupo "+(2).toString(),
        data: dataab,
        pointBackgroundColor:'#97D49B',
        backgroundColor: '#97D49B',
        pointRadius: 10,
      })
      this.scatterChartData.push({
        label: "Grupo "+(3).toString(),
        data: dataac,
        pointBackgroundColor:'#E4A58F',
        backgroundColor: '#E4A58F',
        pointRadius: 10,
      })
/*     this.scatterChartData=[]
       var datal:any[]=[];

       for(let a=0;a<nCluster;a++){
        for(let b=0;b<14;b++){
          
          if(nCluster==2){
            if(this.DatosFinal[nIteraciones][b][3]==a+1){
              datal.push({x:this.DatosFinal[nIteraciones][b][0],y:this.DatosFinal[nIteraciones][b][1]})
            }
          }else{
            if(this.DatosFinal[nIteraciones][b][4]==a+1){
              datal.push({x: this.DatosFinal[nIteraciones][b][3],  y: (this.DatosFinal[nIteraciones][b][0]+this.DatosFinal[nIteraciones][b][1]+this.DatosFinal[nIteraciones][b][2])/3 })
            }
          }
  
        }
  
        this.scatterChartData.push({
          label: (a+1).toString(),
          data: datal,
          backgroundColor: color,
          pointRadius: 10,
        }) */

       // console.log(this.numeroDeClusterAsignado);


  }


  checkColor(cluster:number){
    
    if(cluster == 1 ){
     return this.color ='#A6E2DC';
       
    }
    if(cluster == 2) {
      return this.color = '#97D49B';
    }else {
      return this.color = '#E4A58F';
    }
  }

  calcularMultiplesIteraciones(nuevosCentros_1:number[], nuevosCentros_2:number[], nuevosCentros_3:number[]) {

        return this.calcularDistancias(nuevosCentros_1, nuevosCentros_2, nuevosCentros_3);

  }




  calcularMinimoMaximo(matriz_1:number[], matriz_2:number[], matriz_3:number[]) {
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

  moverCentros(promedio:number, maximo:number, minimos:number[], minimoDeMinimos:number) {

    let mini  = []
    let maxi  = []
    let prom  = []

    let closteToZero:number = 0;

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

        // mini[0] = mini[0].toFixed(2);
        // maxi[0] = maxi[0].toFixed(2);
        // prom[0] = prom[0].toFixed(2);
        
        closteToZero = Math.min(mini[0], prom[0], maxi[0])
        
        // closteToZero = closteToZero.toFixed(2);
        
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

        let numeroDeParche = 0;

        if(mini[0] == closteToZero && i > 0 && mini[1] == 1 ) { 
          clusterNumbers.push(1)
        }

        if(mini[0] == closteToZero && i > 0 && mini[2] == 2) {
          clusterNumbers.push(2)
        }
        if(mini[0] == closteToZero && i > 0 && mini[3] == 3) {
          clusterNumbers.push(3)
        }


        if(maxi[0] == closteToZero && i > 0 && maxi[1] == 1 ) {
          clusterNumbers.push(1)
        }
        if(maxi[0] == closteToZero && i > 0 && maxi[2] == 2) {
          clusterNumbers.push(2)
        }
        if(maxi[0] == closteToZero && i > 0 && maxi[3] == 3) {
          clusterNumbers.push(3)
        }

        if(prom[0] == closteToZero && i > 0 && prom[1] == 1 ) {
          clusterNumbers.push(1)
        }
        if(prom[0] == closteToZero && i > 0 && prom[2] == 2) {
          clusterNumbers.push(2)
        }
        if(prom[0] == closteToZero && i > 0 && prom[3] == 3) {
          clusterNumbers.push(3)
        }

        // console.log(clusterNumbers);
        

      }

      // console.log(mini, maxi, prom);
      // console.log('Minimo', clusterMiniNumber);
      // console.log('Maximo', clusterMaxiNumber);
      // console.log('Promedio:',clusterPromNumber);
      // console.log(clusterNumbers)

      this.nuevosClusters(minimos, clusterNumbers)
      return clusterNumbers;
  }

  nuevosClusters(minimos:number[], clusterNumbers:number[]) {
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
  

    this.nuevosCentros_1 = centro_actualizado_1;
    this.nuevosCentros_2 = centro_actualizado_2;
    this.nuevosCentros_3 = centro_actualizado_3;

    return { centro_actualizado_1, centro_actualizado_2, centro_actualizado_3}
    
   }


}

