import { Component,input } from "@angular/core";
@Component({
    selector: 'book-item',
    standalone: true,
    imports: [],
    templateUrl: './book-item.html',
})export class BookItem{
    coverUrl = input.required<string>();//libro portada url
    titulo = input.required<string>(); //titulo
    autor = input.required<string>();//autor
    previeww= input.required<string>();

}