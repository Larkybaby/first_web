import {  gifis } from "@interfaces/gifs.interfaces/interface";
import { gifspage } from "@interfaces/gifs.interfaces/interfacegifs";
export class DataGifs{
    static gifsshow(gifss: gifis): gifspage{
        return {
            id: gifss.id,
            title: gifss.title,
            url: gifss.images.original.url,
        };
    }
    static gifssarray(dato: gifis[]): gifspage[] {
        return dato.map(gifss => this.gifsshow(gifss));
    }
}