import { Component } from '@angular/core';
import {Header } from '@header/header';
import { FlorComponent } from "./juego.flor/juego.flor";
@Component({
    selector: 'juegos',
    standalone: true,
    imports: [Header, FlorComponent],
    templateUrl: './juegos.html',
})export default class JuegosComponent{

}