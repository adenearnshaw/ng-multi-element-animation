import { Component, OnInit, HostBinding } from '@angular/core';

import { Animations } from 'src/app/animations';

@Component({
    selector: 'app-page-one',
    templateUrl: './page-one.component.html',
    styleUrls: ['./page-one.component.scss'],
    animations: [Animations.transitions],
})
export class PageOneComponent implements OnInit {
    @HostBinding('@pageAnimations')
    public animatePage = true;

    constructor() {}

    ngOnInit() {}
}
