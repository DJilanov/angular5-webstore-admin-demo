import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { UtilsService } from '../../services/utils/utils.service';
import { BackendService } from '../../core/backend/backend.service';
import { EventBusService } from '../../core/event-bus/event-bus.service';
import { ErrorHandlerService } from '../../core/error-handler/error-handler.service';
import { TranslateService } from '../../shared/translation/services/translate.service';

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

    private categories: Array<CategoryModel>;
    public searchData: SearchModel = new SearchModel;

    constructor(
        private router: Router,
        private authService: AuthService,
        private utilsService: UtilsService,
        private backendService: BackendService,
        private translateService: TranslateService,
        private categoriesService: CategoriesService,
        private eventBusService: EventBusService,
        private errorHandlerService: ErrorHandlerService
    ) {
      this.categories = this.categoriesService.getCategories();
      this.eventBusService.categoriesUpdate.subscribe(categories => this.updateCategories(categories));
    };    
    
    public updateCategories(eventData) {
      this.categories = eventData.categories;
    }
    
    public getLanguage() {
      return this.translateService.getLanguage();
    }

    public filterCategories(eventData) {
        this.searchData[eventData.target.name] = eventData.target.value;
        this.categories = this.utilsService.cloneObject(this.categoriesService.getCategories());

        for(let param in this.searchData) {
            if(this.searchData[param] && this.searchData[param].length) {
                this.categories = this.categories.filter((category) => {
                    if(category[param]) {
                        if(typeof category[param] === 'object') {
                            return category[param][this.getLanguage()].toString().toLowerCase().includes(this.searchData[param].toString().toLowerCase());
                        } else {
                            return category[param].toString().toLowerCase().includes(this.searchData[param].toString().toLowerCase());
                        }
                    }
                });
            }
        }
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
