import {Component,signal} from '@angular/core';
import { CommonModule } from "@angular/common";
@Component({
    selector: 'test1',
    standalone: true,
    templateUrl: './test1.html',
    imports: [CommonModule],
})export class test1{
points = signal(0);
tipodeapego = signal('');
indice = signal(0);
terminamos = signal(false);
tipodeapegopreguntas=[
    '',
'Tener una relacion me hace sentir bien',
'prueba pregunta 2', 
'prueba pregunta 3', 
'prueba pregunta 4', 
'prueba pregunta 5',
];
imagen = signal('https://tse2.mm.bing.net/th/id/OIP.MDBZ97nSafcoV8sALScUDQHaHW?rs=1&pid=ImgDetMain&o=7&rm=3');
resultado(){
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
}
suma(value: number){
    this.points.update(p => p + value);
    if(this.indice() < this.tipodeapegopreguntas.length - 1){
        this.indice.update(i => i + 1);
    }else{
      this.terminamos.set(true);
      this.resultado();  
    }
}
reiniciar(){
    this.points.set(0);
    this.tipodeapego.set('');
    this.indice.set(0);
     this.imagen.set('https://tse2.mm.bing.net/th/id/OIP.MDBZ97nSafcoV8sALScUDQHaHW?rs=1&pid=ImgDetMain&o=7&rm=3');
    this.terminamos.set(false);
}
iniciar(){
    this.indice.set(1);
}
}