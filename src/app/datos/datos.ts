import { Items } from '@interfaces/interface';
import { book_part } from '@interfaces/interface_books';
export class datos{
    static bookss(item: Items): book_part{
        return{
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors?.join(', ') || 'Desconocido',
            coverUrl: item.volumeInfo.imageLinks?.thumbnail || '',
            preview: item.volumeInfo.previewLink,
        }
    }
    static booksarray(itemss: Items[]): book_part[]{//
        return itemss.map(item => this.bookss(item))
    }
}