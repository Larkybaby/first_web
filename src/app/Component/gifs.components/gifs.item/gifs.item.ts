import { Component,input } from"@angular/core";
@Component({
    selector: 'gif-item',
    standalone: true,
    imports:[],
    templateUrl: './gifs.tem.html',
})
export class gifsitemcomponent{
gifurl = input.required<string>();
}