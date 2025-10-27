import { Component, inject }  from '@angular/core';
import { ComponentVideo } from 'src/app/Component/video_component/video.component';
import { services } from '@services/services';
import {Header } from '@header/header';
@Component({
    selector:'canciones',
    standalone: true,
    imports: [ ComponentVideo,Header],
    templateUrl: './canciones.html'
})export default class CancionesComponent{
    videoservice=inject(services);
}