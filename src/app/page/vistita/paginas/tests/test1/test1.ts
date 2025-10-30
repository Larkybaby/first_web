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
/*{  texto:'',tipo:''},
{texto:'No sobrepienso tanto y confio en mi pareja',tipo:'seguro'},
{texto:'suelo preocuparme por los sentimientos de mi pareja de manera sana', tipo:'seguro'},
{ texto:'Puedo estar bien tanto cuando estoy con mi pareja como cuando estoy sola',tipo:'seguro'},
{texto:'necesito explicaciones constantemente', tipo:'ansioso'},
{texto:'sobrepienso mucho si todavia me quieren', tipo:'ansioso'},
{texto:'Me preocupa que mi pareja deje de quererme aunque no haya señales claras',tipo:'ansioso'},
{texto:'Mis sentimientos por alguien son muy cambiantes, me puede gustar un dia y al otro no',tipo:'desorganizado'},
{texto:'soy muy amorosa unod dias y otros muy fria con la misma persona',tipo:'desorganizado'},
{texto:'A veces quiero mucho a alguien y luego me alejo sin saber por qué',tipo:'desorganizado'},
{texto:'Suelo huir de los problemas',tipo:'evitativo'},
{texto:'Me aburro rapido en relaciones',tipo:'evitativo'},
{ texto:'Prefiero resolver mis cosas sola antes que hablar de mis sentimientos',tipo:'evitativo'},*/
{ texto: '', tipo: '' },
{ texto: 'No sobrepienso tanto y confío en mi pareja.', tipo: 'seguro' },
{ texto: 'Suelo preocuparme por los sentimientos de mi pareja de manera sana.', tipo: 'seguro' },
{ texto: 'Puedo estar bien tanto cuando estoy con mi pareja como cuando estoy sola.', tipo: 'seguro' },

{ texto: 'Necesito explicaciones constantemente.', tipo: 'ansioso' },
{ texto: 'Sobrepienso mucho si todavía me quieren.', tipo: 'ansioso' },
{ texto: 'Me preocupa que mi pareja deje de quererme aunque no haya señales claras.', tipo: 'ansioso' },

{ texto: 'Mis sentimientos por alguien son muy cambiantes; me puede gustar un día y al otro no.', tipo: 'desorganizado' },
{ texto: 'Soy muy amorosa unos días y otros muy fría con la misma persona.', tipo: 'desorganizado' },
{ texto: 'A veces quiero mucho a alguien y luego me alejo sin saber por qué.', tipo: 'desorganizado' },

{ texto: 'Suelo huir de los problemas.', tipo: 'evitativo' },
{ texto: 'Me aburro rápido en las relaciones.', tipo: 'evitativo' },
{ texto: 'Prefiero resolver mis cosas sola antes que hablar de mis sentimientos.', tipo: 'evitativo' },
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
        promedios[tipo] = arr.length ? arr.reduce((a , b) => a + b)/arr.length : 0;}
        //
        const ordenados = Object.entries(promedios).sort((a, b) => b[1] - a[1]);
        const max = ordenados[0][1];
        const empatados = ordenados.filter(([_, valor]) => valor === max).map(([tipo]) => tipo);
        //
        if(empatados.length > 1){
            this.tipodeapego.set(`Empate entre:
                 ${empatados.join(' y ')}`);
            this.imagen.set('');
        }else{
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