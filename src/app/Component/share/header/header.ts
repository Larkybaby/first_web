import {Component,signal
} from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgIf } from "@angular/common";
@Component({
    selector: 'app-header',
    standalone:true,
    templateUrl: './header.html',
    imports: [RouterLink, NgIf],
}) export class Header{
    menuabierto = signal(false);
    despliegamenu(){
        this.menuabierto.update(value => !value)//invierte el valor actual de la señal
    }
}