import { Component,inject,signal } from '@angular/core';
import { services } from '@services/services';
import { gifspage } from '@interfaces/gifs.interfaces/interfacegifs';
import { gifcomponent } from 'src/app/Component/gifs.components/gif.imagen';
@Component({
    selector: 'busquedagif',
    standalone: true,
    imports:[gifcomponent],
    templateUrl: './busquedaamor.html',
})export class Busquedagif{
 gifservices = inject(services);
 gifis = signal<gifspage[]>([])
 
 buscar(query: string){
    this.gifservices.busquedagifis(query).subscribe( resp => {
        this.gifis.set(resp);
    });
}
}