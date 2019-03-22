import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '@angular/common';

import { Animations } from 'src/app/animations';

@Component({
    selector: 'app-page-two',
    templateUrl: './page-two.component.html',
    styleUrls: ['./page-two.component.scss'],
    animations: [Animations.transitions]
})
export class PageTwoComponent implements OnInit {
    @HostBinding('@pageAnimations')
    public animatePage = true;

    constructor(private location: Location) {}

    ngOnInit() {}

    goBack() {
        this.location.back();
    }
}
