import { Component,input } from '@angular/core';
@Component({
    selector: 'video-item',
    standalone:true,
    imports: [],
    templateUrl: './video.item.html',
})export class Componentvideoitem{
    videoUrl= input.required<string>();
    titulovideo = input.required<string>();
    descripcion = input.required<string>();
}