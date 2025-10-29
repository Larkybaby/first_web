import { Component, inject }  from '@angular/core';
import { ComponentVideo } from 'src/app/Component/video_component/video.component';
import { services } from '@services/services';
import {Header } from '@header/header';
import { BusquedaSongs } from './busquedasongs/busquedasongs'
@Component({
    selector:'canciones',
    standalone: true,
    imports: [ ComponentVideo,Header, BusquedaSongs],
    templateUrl: './canciones.html'
})export default class CancionesComponent{
    videoservice=inject(services);
}