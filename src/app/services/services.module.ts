import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth/auth.service';
import { CategoriesService } from './categories/categories.service';
import { MessagesService } from './messages/messages.service';
import { ProductsService } from './products/products.service';
import { OrdersService } from './orders/orders.service';
import { UtilsService } from './utils/utils.service';
import { WarrantiesService } from './warranties/warranties.service';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AuthService,
        CategoriesService,
        MessagesService,
        OrdersService,
        ProductsService,
        UtilsService,
        WarrantiesService
    ],
    exports: []
})
export class ServicesModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'ServiceModule');
	}
}