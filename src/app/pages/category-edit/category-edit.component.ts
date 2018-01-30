import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../core/backend/backend.service';
import { EventBusService } from '../../core/event-bus/event-bus.service';
import { TranslateService } from '../../shared/translation/services/translate.service';
import { ErrorHandlerService } from '../../core/error-handler/error-handler.service';

import { AuthService } from '../../services/auth/auth.service';
import { CategoriesService } from '../../services/categories/categories.service';

import { CategoryModel } from '../../services/categories/category.model';

const sharredOptions = {
	header: true,
	footer: true
};

@Component({
    selector: 'categories',
    styleUrls: ['./categories.component.scss'],
    templateUrl: './categories.component.html'
})

export class CategoriesComponent {

    public category: CategoryModel;

    constructor(
        private router: Router,
        private authService: AuthService,
        private backendService: BackendService,
        private eventBusService: EventBusService,
        private categoriesService: CategoriesService,
        private errorHandlerService: ErrorHandlerService
    ) {
        // TODO: update by the root params
        // this.category;
        this.eventBusService.emitChangeSharedOptions(sharredOptions);
        this.eventBusService.categoriesUpdate.subscribe(() => this.updateCategories());
    }

    public edit() {
        this.backendService.updateCategories({
            categories: [this.category],
            loginData: this.authService.getLoginData()
        }).subscribe(
            data => this.categoriesService.updateCategory(data.json()),
            err => this.errorHandlerService.handleRequestError(err)
        );
    }

    private updateCategories() {
        this.router.navigate(['/categories']);
    }
}
