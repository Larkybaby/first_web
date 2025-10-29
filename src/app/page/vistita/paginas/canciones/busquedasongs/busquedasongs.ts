import { Component,inject,signal } from '@angular/core';
import { services } from '@services/services';
import {videosinterface} from '@interfaces/videos.interface/interfacevideos_2';
import { ComponentVideo } from 'src/app/Component/video_component/video.component';
@Component({
   selector: 'busquedassongs',
   standalone: true,
   imports:[ ComponentVideo],
    templateUrl: './busquedasongs.html'
})export class BusquedaSongs{
 songservice =  inject(services);
 songs = signal<videosinterface[]>([])
 buscar(query: string){
    this.songservice.busquedavideo(query).subscribe( resp => {
        this.songs.set(resp);
    });
}
};