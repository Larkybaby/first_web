import { ChangeDetectionStrategy, Component,signal } from '@angular/core';
@Component ({
templateUrl: './page-component.html',
styles: [`
    button {
        color: #DAA520;
        padding: 10px 10px;
        margin-right: 2px; 
        width: 65px;
    }
    h1 {
        color: #fc0ec0ff;
    }
    p {
        color: #fc9d0eff;
    }
`],
    //changeDetection: ChangeDetectionStrategy.OnPush
},)
export class CounterPageComponent{ counter = 0;
    counterSignal = signal(10);
    constructor (){ 
        setInterval(()=>{this.counter += 1;  console.log('Tick');},200);
    }
    incremento(value: number){this.counter += value;} 
    resta(value: number){this.counter -= value;}
    reseteo(value: number){this.counter = value;}
}