import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
interface petalo{
id: number; //para que cada uno se distinga
rotation: number; //cuanto rota cada petalo
x: number; //su posicion en x
y: number; //su posicion en y
}

@Component({
    selector: 'juego-flor',
    standalone: true,
    imports: [ CommonModule ],
    templateUrl: './juego.flor.html',

})export class FlorComponent{
    petalos: petalo[] = [];//arreglo de acomodo de los petalos
    resultadoFinal =''; //resultado del juego ya sea me ama o no me ama
    totalPetalos!: number; //total de petalos de mi flor, ! para que sepa que se asignara despues
    mensaje = 'Empecemos el juego'; //mensaje cada que se arranca un petalo
    turno: number = 0; //lleva conteo de turnos

    constructor(){//para que cargen los petalos al inciar
        this.florcompleta();
    }

    florcompleta(){//metodo para poner petalos
        const pea = this.totalPetalos;//petalos de ronda anterior
        let pe = Math.floor(Math.random() * 6) + 5;//petalos de esta nueva ronda
         while(pe==pea){//si se repite el numero de petalos dos rondas seguidas es para que vuelva a hacer el random
            pe = Math.floor(Math.random() * 6) + 5;
        };
        this.totalPetalos = pe;//numero aleatorio de petalos
        this.resultadoFinal= '';//reinicia el resultado
        this.mensaje = 'Comienza el juego';//primer mensaje a mostrar
       /* const radio = 90; //el radio de la distancia desde el centro 

        this.petalos = Array.from({ length: this.totalPetalos}, (_, i) => {
            const angulo = (2 * Math.PI * i) / this.totalPetalos - Math.PI / 2;
            return{
            id: i,
            rotation: (360 / this.totalPetalos) * i - 90, //para que roten correctamente dividimos los petalos entre 360 grados
            x: radio * Math.cos(angulo),//usamos coseno para su posicion
            y: radio * Math.sin(angulo)//usamos seno para su posicion
            };
        });*/
        this.petalos = Array.from({ length: this.totalPetalos }, (_, i) => {
         return {
            id: i,
            rotation: (360 / this.totalPetalos) * i, // ya no restes 90
            x: 0, // ya no se usan
            y: 0  // ya no se usan
  };  

});
    }

    //metodo para arrancar el petalo
   arrancapetalo() {
    if (this.petalos.length > 0) {
        // Alternar mensaje según el turno
        this.mensaje = this.turno % 2 === 0 ? 'Me ama' : 'No me ama';

        // Quitar pétalo
        this.petalos.pop();

        // Si ya no quedan pétalos, guardar el mensaje final
        if (this.petalos.length === 0) {
            this.resultadoFinal = this.mensaje;
        }

        // Avanzar turno
        this.turno++;
    }
}


    
    /*arrancapetalo(){
        if(this.petalos.length > 0){
            this.petalos.pop();
            //mensaje segun si quedan pares o impares
            this.mensaje = this.petalos.length % 2 === 1 ? 'Me ama' : 'No me ama';
            //elimina el ultimo petalo
        if(this.petalos.length === 0){
            this.resultadoFinal = this.mensaje;//mensaje final segun el petalo que quede
        }
    }
    }*/
   /*arrancapetalo(){
    if(this.petalos.length > 0){
        // Determinar el mensaje ANTES de quitar el pétalo
        // Si es IMPAR = "Me ama", si es PAR = "No me ama"
        const esImpar = this.petalos.length % 2 === 1;
        this.mensaje = esImpar ? 'Me ama' : 'No me ama';
        
        // Quitar el pétalo
        this.petalos.pop();
        
        // Si ya no quedan pétalos, guardar el resultado final
        if(this.petalos.length === 0){
            this.resultadoFinal = this.mensaje;
        }
    }
}*/
// metodo para reiniciar
    reiniciarjuego(){
        this.turno = 0;//reinicia el turno
        this.florcompleta();
    }



}