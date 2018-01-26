import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../core/backend/backend.service';
import { EventBusService } from '../../core/event-bus/event-bus.service';
import { ErrorHandlerService } from '../../core/error-handler/error-handler.service';

import { AuthService } from '../../services/auth/auth.service';
import { CategoriesService } from '../../services/categories/categories.service';

const sharredOptions = {
	header: false,
	footer: false
};

@Component({
    selector: 'login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})

export class LoginComponent {
    public username: string = 'toni-website';
    public password: string = 'toni1221';

    constructor(
		public router: Router,
        public authService: AuthService,
        public backendService: BackendService,
        public eventBusService: EventBusService,
        public errorHandlerService: ErrorHandlerService
    ) {
        // TODO: Add correct remember me
        // let data = this.authService.getLoginData();
        // if(data['username']) {
        //     this.router.navigate(['/home']);
        // }
		this.eventBusService.emitChangeSharedOptions(sharredOptions);
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
        this.eventBusService.emitLoggedIn({
            username: this.username,
            password: this.password
        });
        this.router.navigate(['/home']);
    }
}
