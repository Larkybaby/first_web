import { Component,inject } from '@angular/core';
import { services } from '@services/services';
import { BooksComponent } from '../../../Component/books_component/books.component';
@Component({
    selector: 'libros',
    standalone: true,
    imports: [BooksComponent],
    templateUrl: './libros.html',
})export class libros{
bookservice = inject(services);
}