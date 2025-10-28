import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector:'test2',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './test2.html',
})export class test2{
points = signal(0);
lenguajedelamor = signal('');
indice = signal(0);
terminamos = signal(false);
imagen = signal('https://th.bing.com/th/id/R.1e0c08d64931bcb2390d4b9e6cf433f3?rik=xCDg%2fbB5E1ZCqA&riu=http%3a%2f%2fwww.mecayoel20.com%2fwp-content%2fuploads%2f2021%2f02%2fFrase-Habitos-1-1024x1024.png&ehk=B6d5PPb%2fmh%2fSyGw8HIKaJoi8EHG%2bTRjtDn%2bn614t8SM%3d&risl=&pid=ImgRaw&r=0')
lenguajedelamorpreguntas=[
    '',
'prueba pregunta 1',
'prueba pregunta 2', 
'prueba pregunta 3', 
'prueba pregunta 4', 
'prueba pregunta 5',
'prueba pregunta 6',
];
resultado(){
    const p = this.points();
    if (p >= 5 && p<=10){
        this.lenguajedelamor.set('Apego evitativo')
    }else if (p ){
    this.lenguajedelamor.set('')
    }else if(p){
        this.lenguajedelamor.set('')
    }else if(p){
        this.lenguajedelamor.set('')
    }else if(p <=25 && p >= 20){
        this.lenguajedelamor.set('')
     }
}
suma(value: number){
    this.points.update(p => p + value);
    if(this.indice() < this.lenguajedelamorpreguntas.length -1){
        this.indice.update(i => i + 1);
    }else{
      this.terminamos.set(true);
      this.resultado();  
    }
}
reiniciar(){
    this.points.set(0);
    this.lenguajedelamor.set('');
    this.indice.set(0);
    this.terminamos.set(false);
    this.imagen.set('https://th.bing.com/th/id/R.1e0c08d64931bcb2390d4b9e6cf433f3?rik=xCDg%2fbB5E1ZCqA&riu=http%3a%2f%2fwww.mecayoel20.com%2fwp-content%2fuploads%2f2021%2f02%2fFrase-Habitos-1-1024x1024.png&ehk=B6d5PPb%2fmh%2fSyGw8HIKaJoi8EHG%2bTRjtDn%2bn614t8SM%3d&risl=&pid=ImgRaw&r=0');
}
iniciar(){
    this.indice.set(1);
}
}