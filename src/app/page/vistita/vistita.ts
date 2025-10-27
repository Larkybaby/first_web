import { Component,signal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Header } from '@header/header';

 interface Iniciales{
    inicial1:string;
    inicial2:string;
}
@Component({
    standalone: true,
    imports: [Header,
    FormsModule, CommonModule,
],//NgClass,
    templateUrl: './vistita.html',
},)
export class Vistita{
    amor= signal('amor');
    yo= signal('el');
    vida= signal('amor de tu vida');
    ahoraescuchando= signal('Lo que siento-CUCO');
    cancion= signal('Lo que siento.mp3');
    //metodos canciones
    cambiocancion(){
        return`${this.ahoraescuchando()}`
    }
    cancion1(){
        const nombre1='Lo que siento-CUCO';
        const audio1='Lo que siento.mp3';
        this.ahoraescuchando.set(nombre1);
        this.cancion.set(audio1)
        return [nombre1,audio1];
    }
    cancion2(){
        const nombre2='Only-LeeHi';
        const audio2='only-leeHi.mp3';
        this.ahoraescuchando.set(nombre2);
        this.cancion.set(audio2);
        return [nombre2,audio2]//aprendi que si hago un salto return lo toma como un corte de codigo
    }
    cancion3(){
        const nombre3='her-JVKE';
        const audio3='her.mp3';
        this.ahoraescuchando.set(nombre3);
        this.cancion.set(audio3);
        return [nombre3,audio3]
    }
    cancion4(){
        const nombre4='i Hear a Symphony-cody Fry';
        const audio4='i hear a symphony.mp3';
        this.ahoraescuchando.set(nombre4);
        this.cancion.set(audio4);
        return [nombre4,audio4]
    }
    nosotros(){
        this.amor.set('us');
    }
    tuyyo(){
        this.amor.set('amor');
    }
    amore(){
        return `${this.yo()} ${this.vida()} `;
    }
    //iniciales
    inicial= signal<Iniciales[]>([]);
        //{inicial1:'',inicial2:''}
    respuesta = signal('');
    newinicial1:string ='';
    newinicial2:string ='' ;
    cargando = signal(false); /*de tipo boleano*/
    porcentajeEntero = signal<number | null >(null);
    /*juntainiciales(){//con este se añaden como lista
        if (!this.newinicial1.trim() || !this.newinicial2.trim()) return;
         this.inicial.update((list: Iniciales[]) => [
            ...list,
            {   inicial1: this.newinicial1, inicial2: this.newinicial2 }
        ]);
        this.porcentajeEntero = Math.floor(Math.random() * 101);
    }*/
   juntainiciales(){
    if (!this.newinicial1.trim() || !this.newinicial2.trim()) return;
        //añado el loading 
        this.cargando.set(true);
        console.log('Iniciando carga...', { newinicial1: this.newinicial1, newinicial2: this.newinicial2 });


        setTimeout(() => {
        this.inicial.set([{
            inicial1: this.newinicial1.trim(),
            inicial2: this.newinicial2.trim(),
        }]);//es para poner el tiempo que tarda en cargar lo que se le pone dentro
        this.porcentajeEntero.set(Math.floor(Math.random() * 101));
         //PRUEBA ES NECESARIO LIMPIAR IMPUTS?
        const respuestita= this.porcentajeEntero();
        if(respuestita === null){
            this.respuesta.set('ingresa datos validos')
        }
        else if (respuestita >= 80){
            this.respuesta.set('Estan destinados');
        }else if (respuestita < 80 && respuestita >=40){
            this.respuesta.set('tal vez funcione');
        }else if (respuestita <40){
            this.respuesta.set('no hay compatibilidad');
        }
         this.newinicial1 = '';
        this.newinicial2 = '';
        this.cargando.set(false);
         console.log('Carga finalizada', { porcentaje: this.porcentajeEntero, inicial: this.inicial() });
         }, 2000);
    //se mueve esto a la carga//this.porcentajeEntero = Math.floor(Math.random() * 101);
    /*finge que carga un rato por 5 segundos y luego da el porcentaje*/
   }
  /* ngOnInit(){
  // loadingdatos(){
    //si cargando es verdad mostrara esto y despues de un tiempo determinado se pondra en false y se mostrara el resultado
    setTimeout(() => {//es para poner el tiempo que tarda en cargar lo que se le pone dentro
        this.porcentajeEntero = Math.floor(Math.random() * 101);
        this.cargando = false;
   }, 2000);
 //}
}*/
}
