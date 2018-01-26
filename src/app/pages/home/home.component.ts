import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})

export class HomeComponent {

    constructor(
        public router: Router
    ) {};
}
