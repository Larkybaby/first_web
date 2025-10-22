import {Component, input } from'@angular/core';
import { Componentvideoitem } from'./video.item/video.item';
import { videosinterface } from '@interfaces/videos.interface/interfacevideos_2' ;
 @Component({
    selector: 'Video-Component',
    standalone: true,
    imports: [ Componentvideoitem ],
    templateUrl: './video.component.html',
 })export class ComponentVideo{
    videito =input.required<videosinterface[]>();
    titulovideo = input.required<videosinterface[]>();
    descripcionvideo = input.required<videosinterface[]>();
 }