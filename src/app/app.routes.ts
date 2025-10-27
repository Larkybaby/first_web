import {Component} from '@angular/core';
import { Routes } from '@angular/router';
import { CounterPageComponent } from './page/counter/counter/page-component';
import { HeroPageComponent } from './page/hero/hero-page.component';
import { PokemonPageComponent} from './page/pokemon/pokemon';
import { buterfly } from './page/buterfly/buterfly';
import {Vistita} from './page/vistita/vistita';
import { LibrosComponenet } from './page/vistita/paginas/libros/libros';


export const routes: Routes = [
    {
    path:'counter',
    component: CounterPageComponent,},
    {
    path:'hero',
    component: HeroPageComponent,},
    {
    path:'vistita',
    component:Vistita,},
    {
        path:'libros',
        component: LibrosComponenet,
    },
    {
        path:'Canciones',
        loadComponent: () => import ('./page/vistita/paginas/canciones/canciones').then(m => m.default)
    },{
        path: 'frases',
        loadComponent: () => import ('./page/vistita/paginas/frases/frases').then(m => m.default)
    },{
        path:'gifsamor',
        loadComponent: () => import ('./page/vistita/paginas/gifisamor/gifisamor').then(m => m.default)
    },{
        path: 'tests',
        loadComponent: () => import ('./page/vistita/paginas/tests/testspagina').then(m => m.default),
    },{
        path: 'juegos',
        loadComponent: () => import ('./page/vistita/paginas/juegos/juegos').then(m => m.default)
    },
    {
     path:'pokemon',
    component: PokemonPageComponent,
    },{
        path:'buterfly',
        component: buterfly,
    },{
        path:'**',
        redirectTo:'vistita',
    }
    
];
 
