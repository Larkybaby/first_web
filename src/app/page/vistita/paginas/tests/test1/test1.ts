import {Component,signal} from '@angular/core';
import { CommonModule } from "@angular/common";
@Component({
    selector: 'test1',
    standalone: true,
    templateUrl: './test1.html',
    imports: [CommonModule],
})export class test1{
//señales
//points = signal(0);
tipodeapego = signal('');
indice = signal(0);
terminamos = signal(false);
//respuestas para nuevo modelo
respuestas:number[] = [];//almacena las respuestas individualmente 
//preguntas
tipodeapegopreguntas=[
{  texto:'',tipo:''},
{texto:'pregunta prueba 1',tipo:'seguro'},
{texto:'prueba pregunta 2', tipo:'seguro'},
{texto:'prueba pregunta 3', tipo:'ansioso'},
{texto:'prueba pregunta 4', tipo:'ansioso'},
{texto:'prueba pregunta 5',tipo:'desorganizado'},
{texto:'prueba pregunta 6',tipo:'desorganizado'},
{texto:'prueba pregunta 7',tipo:'evitativo'},
{texto:'prueba pregunta 8',tipo:'evitativo'},
];
imagen = signal('https://tse2.mm.bing.net/th/id/OIP.MDBZ97nSafcoV8sALScUDQHaHW?rs=1&pid=ImgDetMain&o=7&rm=3');
/*resultado(){
    const p = this.points();
    if (p >= 2 && p<=5){
        this.tipodeapego.set('Apego evitativo')
        this.imagen.set('https://i.pinimg.com/originals/d6/a8/9f/d6a89f00b281c1077d508486e6cf5747.jpg');
    }else if (p>=6 && p<=11 ){
    this.tipodeapego.set('Apego desorganizado')
    this.imagen.set('https://i.pinimg.com/originals/f3/ae/75/f3ae75bb8a9b41772661c0e86bc03a4a.jpg');
    }else if(p>=12 && p <=18){
        this.tipodeapego.set('Apego Seguro')
        this.imagen.set('https://elpradopsicologos.es/storage/posts/June2025/Apego%20seguro1.png');
    }else if(p>=19 && p<= 25){
        this.tipodeapego.set('Apego ansioso')
        this.imagen.set('https://cdn.abundantum.org/images/2024/12/1733855000-76977175-20989-thumb.jpg');
    }
}*/
/*suma(value: number){
    this.points.update(p => p + value);
    if(this.indice() < this.tipodeapegopreguntas.length - 1){
        this.indice.update(i => i + 1);
    }else{
      this.terminamos.set(true);
      this.resultado();  
    }
}*/
respuesta(valor:number){//para que siga avanzando y guarde las respuestas del usuario de cada pregunta
this.respuestas.push(valor);//guarda las respuestas
if(this.indice() < this.tipodeapegopreguntas.length - 1){
    this.indice.update(i => i + 1);
}else{
    this.calcularapego();//para el resultado
    this.terminamos.set(true);//para la ultima pantalla
}
};
calcularapego(){
    const categorias:Record<string,number[]>={//categorias de apego
        seguro:[],
        ansioso:[],
        desorganizado:[],
        evitativo:[],
    };
    for (let i = 1; i < this.tipodeapegopreguntas.length; i ++){
        const tipo= this.tipodeapegopreguntas[i].tipo;
        categorias[tipo].push(this.respuestas[i - 1]);
    }
    const promedios: Record<string,number> ={};
    for (const tipo in categorias){
        const arr = categorias[tipo];
        promedios[tipo] = arr.length ? arr.reduce((a , b) => a + b)/arr.length : 0;
        
        //checa cual es el promedio mas alto
        const tipodominante= Object.entries(promedios).sort((a, b) => b[1]- a[1])[0][0];
        this.tipodeapego.set(tipodominante);
        //switch para las 4 opciones
        switch(tipodominante){
            case 'seguro':
            this.imagen.set('https://elpradopsicologos.es/storage/posts/June2025/Apego%20seguro1.png');
            break;
            case 'ansioso':
            this.imagen.set('https://cdn.abundantum.org/images/2024/12/1733855000-76977175-20989-thumb.jpg');
            break;
            case 'desorganizado':
            this.imagen.set('https://i.pinimg.com/originals/f3/ae/75/f3ae75bb8a9b41772661c0e86bc03a4a.jpg');
            break;
            case 'evitativo':
                this.imagen.set('https://i.pinimg.com/originals/d6/a8/9f/d6a89f00b281c1077d508486e6cf5747.jpg');
            break;
        }
    } 
    console.log('Promedios:', promedios);
};
reiniciar(){
   // this.points.set(0);
    this.respuestas = [];
    this.tipodeapego.set('');
    this.indice.set(0);
     this.imagen.set('https://tse2.mm.bing.net/th/id/OIP.MDBZ97nSafcoV8sALScUDQHaHW?rs=1&pid=ImgDetMain&o=7&rm=3');
    this.terminamos.set(false);
}
iniciar(){
    this.indice.set(1);
}
}