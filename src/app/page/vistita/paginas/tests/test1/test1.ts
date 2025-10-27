import {Component,signal} from '@angular/core';
@Component({
    selector: 'test1',
    standalone: true,
    templateUrl: './test1.html',
})export class test1{
points = signal(0);
tipodeapego = signal('');
resultado(){
    if (this.points.length <= 5){
        this.tipodeapego.set('')
    }else if (this.points.length){
    this.tipodeapego.set('')
    }else if(this.points.length){
        this.tipodeapego.set('')
    }else if(this.points.length){
        this.tipodeapego.set('')
    }else if(this.points.length){
        this.tipodeapego.set('')
     }
}
suma(value: number){
    this.points.update(p => p + value);
}
reiniciar(){
    this.points.set(0);
}
}