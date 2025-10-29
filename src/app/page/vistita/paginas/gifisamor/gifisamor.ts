import { Component, inject } from '@angular/core';
import { gifcomponent } from 'src/app/Component/gifs.components/gif.imagen';
import { services } from '@services/services';
import {Header } from '@header/header';
import { Busquedagif } from './busqueda/busquedaamor'
@Component ({
    selector: 'gifs-amor',
    standalone: true,
    imports: [gifcomponent, Header, Busquedagif],
    templateUrl: './gifisamor.html',
})export default class Gifisamor{
    gifiservice = inject(services);
}