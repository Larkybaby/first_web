import { Component, inject }  from '@angular/core';
import { ComponentVideo } from 'src/app/Component/video_component/video.component';
import { services } from '@services/services';
@Component({
    selector:'canciones',
    standalone: true,
    imports: [ ComponentVideo ],
    templateUrl: './canciones.html'
})export class CancionesComponent{
    videoservice=inject(services);
}