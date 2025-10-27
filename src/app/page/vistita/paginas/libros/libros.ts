import { Component,inject } from '@angular/core';
import { services } from '@services/services';
import { BooksComponent } from '../../../../Component/books_component/books.component';
import { Header } from '@header/header';
import {BusquedaComponent } from './busqueda/busqueda';
@Component({
    selector: 'libros',
    standalone: true,
    imports: [BooksComponent,Header,
    BusquedaComponent,
    ],
    templateUrl: './libros.html',
})export class LibrosComponenet{
bookservice = inject(services);
}