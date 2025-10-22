import { Component,input } from "@angular/core";
import { gifsitemcomponent } from "./gifs.item/gifs.item";
import { gifspage } from "@interfaces/gifs.interfaces/interfacegifs";
@Component({
    selector: 'gif-show',
    standalone: true,
    imports:[ gifsitemcomponent ],
    templateUrl: './gif.imagen.html',
}) export class gifcomponent{
    gifiti = input.required<gifspage[]>();
}