import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../core/backend/backend.service';
import { EventBusService } from '../../core/event-bus/event-bus.service';
import { TranslateService } from '../../shared/translation/services/translate.service';
import { ErrorHandlerService } from '../../core/error-handler/error-handler.service';

import { AuthService } from '../../services/auth/auth.service';
import { UtilsService } from '../../services/utils/utils.service';
import { ProductsService } from '../../services/products/products.service';
import { CategoriesService } from '../../services/categories/categories.service';

import { ProductModel } from '../../services/products/product.model';
import { CategoryModel } from '../../services/categories/category.model';

@Component({
    selector: 'products',
    styleUrls: ['./products.component.scss'],
    templateUrl: './products.component.html'
})

export class ProductsComponent {

    public products: Array<ProductModel>;
    public categories: Array<CategoryModel>;
    public searchData: ProductModel;

    constructor(
        private router: Router,
        private productsService: ProductsService,
        private eventBusService: EventBusService,
        private translateService: TranslateService,
        private categoriesService: CategoriesService,
        private errorHandlerService: ErrorHandlerService,
    ) {
      this.products = productsService.getProducts();
      this.categories = categoriesService.getCategories();
      this.eventBusService.productsUpdate.subscribe(data => this.onChangedProduct(data));
      this.eventBusService.categoriesUpdate.subscribe(data => this.onFetchedData(data));
    };

    public getLanguage() {
      return this.translateService.getLanguage();
    }

    public onChangedProduct(product) {
      for(var productsCounter = 0; productsCounter < this.products.length; productsCounter++) {
        if(this.products[productsCounter]['_id'] == product.response._id) {
          this.products[productsCounter] = product.response;
        }
      }
    }

    public productsByCategory(category) {
        return this.productsService.getProductsByCategory(category.products);
    }
    
    public onFetchedData(data) {
      this.products = data.products;
      this.categories = data.categories;
    }

    public showEditModal(product) {
    //   this.eventBusService.emitShowProductModal({
    //       'product': product,
    //       'action': 'edit',
    //       'title':'editProduct', 
    //       "btnText": "editProduct"
    //   });
    }

    public showAddNewModal() {
    //   this.eventBusService.emitShowProductModal({
    //       'product': {
    //         "category": "",
    //         "title": {
    //             "bg": "",
    //             "en": ""
    //         },
    //         "description": {
    //             "bg": "",
    //             "en": ""
    //         },
    //         "more_info": {
    //             "bg": "",
    //             "en": ""
    //         },
    //         "more_details": {
    //             "bg": "",
    //             "en": ""
    //         },
    //         "params": {
    //             "bg": [],
    //             "en": []
    //         },
    //         "new_price": "",
    //         "old_price": "",
    //         "daily_offer": false,
    //         "zIndex": 0,
    //         "shown": true,
    //         "count": 0,
            
    //         "rating": 4.7,
    //         "is_new": true,
    //         "carousel": false,
    //         "link": "",
    //         "make": "",
    //         "main_image": "",
    //         "other_images": []
    //       },
    //       'action': 'create',
    //       'title':'createProduct', 
    //       "btnText": "createProduct"
    //   });
    }
}
