import {Component} from '@angular/core';
import { Routes } from '@angular/router';
import { CounterPageComponent } from './page/counter/counter/page-component';
import { HeroPageComponent } from './page/hero/hero-page.component';
import { Vistita } from './page/vistita/vistita';
import { PokemonPageComponent} from './page/pokemon/pokemon';
import { buterfly } from './page/buterfly/buterfly';


export const routes: Routes = [{
    path:'counter',
    component: CounterPageComponent,},{
    path:'hero',
    component: HeroPageComponent,},{
    path:'',
    component: Vistita,},{
     path:'pokemon',
    component: PokemonPageComponent,
    },{
        path:'buterfly',
        component: buterfly,
    },{
        path:'**',
        redirectTo:'',
    }
    
];
 
