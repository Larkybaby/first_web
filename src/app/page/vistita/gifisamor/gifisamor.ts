import { Component, inject } from '@angular/core';
import { gifcomponent } from 'src/app/Component/gifs.components/gif.imagen';
import { services } from '@services/services';
@Component ({
    selector: 'gifs-amor',
    standalone: true,
    imports: [ gifcomponent ],
    templateUrl: './gifisamor.html',
})export class Gifisamor{
    gifiservice = inject(services);
}