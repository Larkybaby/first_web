import { Component } from '@angular/core';
import { Header } from "@header/header";
import {test1} from './test1/test1';
import { test2 } from "./test2/test2";
@Component({
    selector: 'gifs-amor',
    standalone: true,
    templateUrl: './testspagina.html',
    imports: [Header, test1, test2],
}) export default class TestComponent{

}