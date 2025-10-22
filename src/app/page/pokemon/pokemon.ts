import { Component,signal, computed } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgClass,CommonModule } from "@angular/common";
interface Character{
    id:number;
    nombre:string;
    poder:number;
}
@Component({
    templateUrl: './pokemon.html',
    
    styles: [`
    header{
        text-align: center;
        background-color: #ff5c7b;
        color: white;
    }
    `],
    imports:[FormsModule,NgClass,CommonModule],
})
export class PokemonPageComponent{
    characters= signal<Character[]>([
        {id:1,nombre:'charizard',poder:45},
        {id:2,nombre:'bulbazord',poder:60},
        {id:3,nombre:'squirtle',poder:80},
    ]);
    newnombre: string = '';
    newpoder: number = 0;

    powerClass = computed(() => ({
        'text-danger': true
    }));
     addCharacter() {
        if (!this.newnombre.trim() || this.newpoder <= 0) return;
        const newId = this.characters().length > 0
            ? Math.max(...this.characters().map(c => c.id)) + 1
            : 1;
        this.characters.update(list => [
            ...list,
            { id: newId, nombre: this.newnombre, poder: this.newpoder }
        ]);
        this.newnombre = '';
        this.newpoder = 0;
    }
    trackById(index: number, item: Character) {
        return item.id;
    }
}