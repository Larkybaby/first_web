import { Component } from '@angular/core';
import { Header } from "@header/header";
import {test1} from './test1/test1';
@Component({
    selector: 'gifs-amor',
    standalone: true,
    templateUrl: './testspagina.html',
    imports: [Header,test1],
}) export default class TestComponent{

}