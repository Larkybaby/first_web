import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector:'test2',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './test2.html',
})export class test2{
//points = signal(0);
lenguajedelamor = signal(''); //en caso de otro test cambia esto
indice = signal(0);
terminamos = signal(false);
imagen = signal('https://th.bing.com/th/id/R.1e0c08d64931bcb2390d4b9e6cf433f3?rik=xCDg%2fbB5E1ZCqA&riu=http%3a%2f%2fwww.mecayoel20.com%2fwp-content%2fuploads%2f2021%2f02%2fFrase-Habitos-1-1024x1024.png&ehk=B6d5PPb%2fmh%2fSyGw8HIKaJoi8EHG%2bTRjtDn%2bn614t8SM%3d&risl=&pid=ImgRaw&r=0')
respuestas:number[] = [];//almacena las respuestas individualmente 
lenguajedelamorpreguntas=[ //en caso de otro test cambia esto
{texto:'',tipo:'',},
{texto:'Que me den cumplidos me hace sentir bien',tipo:'palabras de afirmacion',},
{texto:'Me encanta hacer cosas por los demas',tipo:'Actos de servicio',},
{texto:'Adoro cuando me regalan algo',tipo:'Regalos',},
{texto:'En serio me gusta pasar tiempo con la gente que amo',tipo:'Tiempo de calidad',},
{texto:'Los abrazos son mi cosa favorita',tipo:'Contacto Fisico',},
{texto:'Me gusta dar cumplidos tanto como recibirlos',tipo:'palabras de afirmacion',},
{texto:'Me siento querido cuando alguien hace algo por mi',tipo:'Actos de servicio',},
{texto:'Siempre me gusta dar cosas aunque no sea una fecha especial',tipo:'Regalos',},
{texto:'Suelo planear muchas salidas con mis amigos para pasar tiempo juntos',tipo:'Tiempo de calidad',},
{texto:'Me gusta estar abrazando o tocando a las personas que quiero constantemente',tipo:'Contacto Fisico',},
{texto:'Las palabras tienen gran impacto en mi',tipo:'palabras de afirmacion',},
{texto:'Se me queda muy grabado cuando alguien hizo algo por mi',tipo:'Actos de servicio',},
{texto:'Lo que doy siempre tiene un significado y es pensado para esa persona especificamente',tipo:'Regalos',},
{texto:'cuando conozco una actividad nueva siempre pienso en hacerla con mis amigos',tipo:'Tiempo de calidad',},
{texto:'si alguien rechaza que los abrace me suele afectar',tipo:'Contacto Fisico',},
];
/*resultado(){
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
}*/
//nuevo sistema de resultados
respuesta(valor:number){//para que siga avanzando y guarde las respuestas del usuario de cada pregunta
this.respuestas.push(valor);//guarda las respuestas
if(this.indice() < this.lenguajedelamorpreguntas.length - 1){
    this.indice.update(i => i + 1);
}else{
    this.calcularlenguaje();//para el resultado
    this.terminamos.set(true);//para la ultima pantalla
}
};
//metodo para resultados
calcularlenguaje(){
    const categorias:Record<string,number[]>={//categorias     //en caso de otro test cambia esto
        'palabras de afirmacion':[],
        'Actos de servicio':[],
        'Regalos':[],
        'Tiempo de calidad':[],
        'Contacto Fisico':[],
    };
    for (let i = 1; i < this.lenguajedelamorpreguntas.length; i ++){ //en caso de otro test cambia esto
        const tipo= this.lenguajedelamorpreguntas[i].tipo; //en caso de otro test cambia esto
        categorias[tipo].push(this.respuestas[i - 1]);
    }

    const promedios: Record<string,number> ={};
    for (const tipo in categorias){
        const arr = categorias[tipo];
        promedios[tipo] = arr.length ? arr.reduce((a , b) => a + b)/arr.length : 0;
        } 
        const ordenados = Object.entries(promedios).sort((a, b) => b[1] - a[1]);
        const max = ordenados[0][1];
        const empatados = ordenados.filter(([_, valor]) => valor === max).map(([tipo]) => tipo);
        //if para diferencias
        if(empatados.length>1){
        this.lenguajedelamor.set(`Empate entre: ${empatados.join(' y ')}`);
        this.imagen.set('');
        }else{
         //checa cual es el promedio mas alto     
        const tipodominante= Object.entries(promedios).sort((a, b) => b[1]- a[1])[0][0];
        this.lenguajedelamor.set(tipodominante); //en caso de otro test cambia esto
        //switch para las 4 opciones
      //en caso de otro test cambia esto
        switch(tipodominante){
            case 'palabras de afirmacion':
            this.lenguajedelamor.set('palabras de afirmacion');
            this.imagen.set('');
            break;
            case 'Actos de servicio':
            this.lenguajedelamor.set('Actos de servicio');
            this.imagen.set('');
            break;
            case 'Regalos':
            this.lenguajedelamor.set('Regalos');
            this.imagen.set('');
            break;
            case 'Tiempo de calidad':
                this.lenguajedelamor.set('Tiempo de calidad');
                this.imagen.set('');
            break;
            case 'Contacto Fisico':
                this.lenguajedelamor.set('Contacto Fisico');
                this.imagen.set('');
                break;
        }
    }
    console.log('Promedios:', promedios);
};
//reinicio
reiniciar(){
    //this.points.set(0);
    this.respuestas = [];
    this.lenguajedelamor.set(''); //en caso de otro test cambia esto
    this.indice.set(0);
    this.terminamos.set(false);
    this.imagen.set('https://th.bing.com/th/id/R.1e0c08d64931bcb2390d4b9e6cf433f3?rik=xCDg%2fbB5E1ZCqA&riu=http%3a%2f%2fwww.mecayoel20.com%2fwp-content%2fuploads%2f2021%2f02%2fFrase-Habitos-1-1024x1024.png&ehk=B6d5PPb%2fmh%2fSyGw8HIKaJoi8EHG%2bTRjtDn%2bn614t8SM%3d&risl=&pid=ImgRaw&r=0');
}
iniciar(){
    this.indice.set(1);
}
}