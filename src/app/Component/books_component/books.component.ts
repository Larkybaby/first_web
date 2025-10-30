//componente de los libros 1
import { Component, input } from "@angular/core";
import { book_part } from "@interfaces/interface_books"
import { BookItem } from "./books.item/book-item";
@Component({
    selector: 'bookscomponent',
    standalone: true,
    imports: [BookItem],
    templateUrl: './books.component.html'

})
export class BooksComponent{
covers = input.required<book_part[]>();
titule= input.required<book_part[]>();
autore= input.required<book_part[]>();
prewie= input.required<book_part[]>();
}