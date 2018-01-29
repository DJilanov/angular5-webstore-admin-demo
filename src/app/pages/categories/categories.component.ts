import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../core/backend/backend.service';
import { EventBusService } from '../../core/event-bus/event-bus.service';
import { TranslateService } from '../../shared/translation/services/translate.service';
import { ErrorHandlerService } from '../../core/error-handler/error-handler.service';

import { AuthService } from '../../services/auth/auth.service';
import { CategoriesService } from '../../services/categories/categories.service';

import { SearchModel } from './category.search.model';
import { CategoryModel } from '../../services/categories/category.model';

@Component({
    selector: 'categories',
    styleUrls: ['./categories.component.scss'],
    templateUrl: './categories.component.html'
})

export class CategoriesComponent {

    public categories: Array<CategoryModel>;
    public searchData: SearchModel = new SearchModel;

    constructor(
        private router: Router,
        private authService: AuthService,
        private backendService: BackendService,
        private translateService: TranslateService,
        private categoriesService: CategoriesService,
        private eventBusService: EventBusService,
        private errorHandlerService: ErrorHandlerService
    ) {
      this.categories = categoriesService.getCategories();
      this.eventBusService.categoriesUpdate.subscribe(categories => this.updateCategories(categories));
    };    
    
    public updateCategories(eventData) {
      this.categories = eventData.categories;
    }
    
    public getLanguage() {
      return this.translateService.getLanguage();
    }

    public filterCategories(eventData) {
        
    }

    public edit() {

    }
    
    public addCategory() {
        this.categories[this.categories.length] = new CategoryModel();
    }
        

    public create(category) {
        this.backendService.createCategories({
            category: category,
            loginData: this.authService.getLoginData()
        }).subscribe(
            data => this.categoriesService.addCategory(data.json()),
            err => this.errorHandlerService.handleRequestError(err)
        );
    }

    public update(category) {
        this.backendService.updateCategories({
            categories: [category],
            loginData: this.authService.getLoginData()
        }).subscribe(
            data => this.categoriesService.updateCategory(data.json()),
            err => this.errorHandlerService.handleRequestError(err)
        );
    }

    public delete(category) {
        let loginData = this.authService.getLoginData();
        this.backendService.deleteCategory({
            category: category,
            username: loginData['username'],
            password: loginData['password']
        }).subscribe(
            data => this.categoriesService.removeCategory(data.json()),
            err => this.errorHandlerService.handleRequestError(err)
        );
    }
}
