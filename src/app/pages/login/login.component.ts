import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../core/backend/backend.service';
import { EventBusService } from '../../core/event-bus/event-bus.service';
import { ErrorHandlerService } from '../../core/error-handler/error-handler.service';

import { AuthService } from '../../services/auth/auth.service';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
    selector: 'login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})

export class LoginComponent {
    public username: string = '';
    public password: string = '';

    constructor(
		public router: Router,
        public authService: AuthService,
        public backendService: BackendService,
        public eventBusService: EventBusService,
        public errorHandlerService: ErrorHandlerService
    ) {
        let data = this.authService.getLoginData();
        if(data['username']) {
            this.router.navigate(['/home']);
        }
    }

    public tryLogin() {
        this.backendService.adminLogin({
            username: this.username,
            password: this.password
        }).subscribe(
            data => this.login(data),
            err => this.errorHandlerService.handleRequestError(err)
        );
    }

    public login(data) {
        this.authService.setLoginData({
            username: this.username,
            password: this.password
        });
        this.eventBusService.emitLoggedIn({});
        this.router.navigate(['/home']);
    }
}
