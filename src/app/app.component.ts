import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

import { BackendService } from './core/backend/backend.service';
import { EventBusService } from './core/event-bus/event-bus.service';
import { ErrorHandlerService } from './core/error-handler/error-handler.service';

import { AuthService } from './services/auth/auth.service';
import { ProductsService } from './services/products/products.service';
import { MessagesService } from './services/messages/messages.service';
import { CategoriesService } from './services/categories/categories.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styles: [ './app.component.scss' ]
})

export class AppComponent {
    constructor(
        public router: Router,
        public authService: AuthService,
        public backendService: BackendService,
        public productsService: ProductsService,
        public messagesService: MessagesService,
        public eventBusService: EventBusService,
        public categoriesService: CategoriesService,
        public errorHandlerService: ErrorHandlerService
    ) {
        this.eventBusService.loggedIn.subscribe(data => this.onLogin(data));
		this.router.events.subscribe(
			(event) => {
				if(event instanceof NavigationStart) {
					this.eventBusService.emitChangeRoute(event.url);
				}
			}
		);
    };

    public onLogin(eventData) {
        this.backendService.getAllData(
            this.authService.getLoginData()
        ).subscribe(
            data => this.setData(data.json()),
            err => this.errorHandlerService.handleRequestError(err)
        );
    }

    public setData(result) {        
        this.productsService.setProducts(result.products);
        this.messagesService.setMessages(result.messages);
        this.categoriesService.setCategories(result.categories);
    }
}
