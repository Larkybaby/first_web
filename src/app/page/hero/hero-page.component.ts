import {Component,signal} from '@angular/core';
@Component ({
    templateUrl: './hero-page.component.html',
    styles: [`
        header {
            text-align: center;
            background-color: #ff5c7b;
            color: white;  }
        h1{
            color: #ffffffff;
        }
        `]
},)
export class HeroPageComponent{
    sabrina = signal('Sabrina Carpenter');
    numerito = signal(23);
    comotuquieras(){
        return `
        ${this.sabrina()} tiene ${this.numerito()}`;
    }
    cambianombre(){
        this.sabrina.set('Damiano David');
        this.numerito.set(30);
    }
    volver(){
        this.sabrina.set('Sabrina Carpenter');
        this.numerito.set(23);
    }
    viejito(){
        this.numerito.set(50);
    }
}