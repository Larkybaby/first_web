import { Component,inject, signal  } from '@angular/core';
import { services} from '@services/services';
import { book_part } from '@interfaces/interface_books'; 
import { BooksComponent } from '../../../Component/books_component/books.component'; 
@Component({
    selector: 'busqueda',
    standalone: true,
    imports: [ BooksComponent ],
    templateUrl: './busqueda.html'
}) 
export class BusquedaComponent{
//injecto clase de servicio
bookservice = inject(services);
libritos= signal<book_part[]>([])
//metodo a usar
buscar(query: string){
    this.bookservice.search_books(query).subscribe( resp => {
        this.libritos.set(resp);
    });
}


}