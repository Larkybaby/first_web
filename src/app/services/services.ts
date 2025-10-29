import { HttpClient } from "@angular/common/http";//para hacer las peticiones
import { Injectable,signal,inject} from "@angular/core";
import { environment } from "@environments/environment";//para url y api key
import { Books } from "../interfaces/interface";
import { book_part } from "@interfaces/interface_books";
import { datos } from "../datos/datos"
import { Observable, map, tap } from "rxjs";
//imports para video
import { Videos } from "@interfaces/videos.interface/interfacevideos"
import { videosinterface } from "@interfaces/videos.interface/interfacevideos_2";
import { datosvideos } from "../datos/datosvideo"
//imports gifis
import { DataGifs } from "../datos/datosgifs";
import { Gifs } from "@interfaces/gifs.interfaces/interface";
import { gifspage } from "@interfaces/gifs.interfaces/interfacegifs";

@Injectable({providedIn: 'root'})//para injectar en la aplicacion


export class services{//la clase donde estaran los servicios
private http = inject(HttpClient);//injectar el servicio HTTPCLIENT usando standalone
romancebooks = signal<book_part[]>([]);
romancebooksloading = signal(true);
//señales video
romancesongs = signal<videosinterface[]>([]);
//señal gifs
amorgifs = signal<gifspage[]>([]);
//procedemos a hacer los servicios a utilizar
constructor(){//al crear la clase se carga el servicio
    this.load_romance_books();
    this.load_romance_songs();
    this.load_amor_gifis();
}
load_romance_books(){
    this.http
    .get<Books>(`${ environment.googleurl}/volumes`,{
        params: {
            key: environment.googleapikey,
            q: 'bestromancebooks',//el tipo de libro a buscar
            maxResults: 28,//para numero maximo de resultados
            
        }
    })
    .subscribe((resp) => {
       //const librosprocesados = resp.items.map(item => datos.bookss(item));//se agrego un map
       const librosprocesados =datos.booksarray(resp.items)
       this.romancebooks.set(librosprocesados);//se pone el nombre de la constante
        console.log({ librosprocesados });
    })
}
search_books(query: string): Observable <book_part[]>{
    return this.http
    .get<Books>(`${ environment.googleurl}/volumes`,{
        params: {
            key: environment.googleapikey,
            q: query,// libro que buscara el usuario
            maxResults: 16,//para numero maximo de resultados
            
        },
    })
    .pipe(
        map(({ items }) => items ),
        map((data) => datos.booksarray(data)),

    );      

};

//servicios video
load_romance_songs(){
    const cachestorage = 'romance_songs';
    const cachetimekey = 'romance_songs_time';
    const tiempoguardado =1000 * 60 * 60 *12; //12 horas
    
    const cached = localStorage.getItem(cachestorage)
    const cachedtime = localStorage.getItem(cachetimekey);
    const ahora = Date.now();

if(cached &&cachedtime && ahora -+cachedtime < tiempoguardado){
    console.log('resultados en cache');
    const videosprocesados = JSON.parse(cached);
    this.romancesongs.set(videosprocesados);
    return;
}
console.log('llamando api de youtube');
this.http
.get<Videos>(`${ environment.videosurl}/search`,{//cambie videos por search
    params:{
        key:environment.googleapikey ,
        q: 'love',
        //chart: 'mostpopular',
        part: 'snippet',
        type: 'video',
        maxResults: '10',
        videoCategoryId: '10',//categoria 10 es musica

    }
})
    .subscribe({
        next: (resp) => {
       //const librosprocesados = resp.items.map(item => datos.bookss(item));//se agrego un map
       const videosprocesados =datosvideos.datearray(resp.items);
       //resultados cache
       localStorage.setItem(cachestorage,JSON.stringify(videosprocesados));
       localStorage.setItem(cachetimekey,ahora.toString());

        this.romancesongs.set(videosprocesados);//se pone el nombre de la constante
        console.log({videosprocesados});
        console.log('resultados de la api ahora guardados en cache');
        },
        error: (err) =>{
            console.log('no se pudo llamar a youtube',err);
            if(cached){
                const videosprocesados = JSON.parse(cached);
                this.romancesongs.set(videosprocesados);
                console.log('se tuvo que restaurar cache debido a error de llamado')
            }
        }
    })
};
busquedavideo(query:string): Observable<videosinterface[]>{
 return this.http
.get<Videos>(`${ environment.videosurl}/search`,{//cambie videos por search
    params:{
        key:environment.googleapikey ,
        q: query,
        //chart: 'mostpopular',
        part: 'snippet',
        type: 'video',
        maxResults: '10',
        videoCategoryId: '10',//categoria 10 es musica

    }
})
.pipe(
        map(({ items}) =>  items),
        map((data) => datosvideos.datearray(data)),
    ); 
};
//servicio gifis
load_amor_gifis(){
    this.http
    .get<Gifs>(`${ environment.giphyurl}/search`,{
        params:{
            api_key: environment.api_key,
            q: 'love you',
            limit: '16',
        }
    })
    .subscribe((resp) => {
        const gifisprocesados = DataGifs.gifssarray(resp.data);
        this.amorgifs.set(gifisprocesados);
        console.log({gifisprocesados});
    })
};
busquedagifis(query: string): Observable <gifspage[]>{
    return this.http
    .get<Gifs>(`${ environment.giphyurl}/search`,{
        params: {
            api_key: environment.api_key,
            q: query,// gif que se buscara
            limit: 16,//para numero maximo de resultados
            
        },
    })
    .pipe(
        map(({ data }) => data ),
        map((items) => DataGifs.gifssarray(items)),
    );      
};
};
