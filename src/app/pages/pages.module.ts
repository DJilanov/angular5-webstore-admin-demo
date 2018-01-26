import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductsComponent } from './products/products.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        HomeComponent,
        LoginComponent,
        MessagesComponent,
        ProductsComponent,
        NavigationComponent,
        CategoriesComponent
    ],
    declarations: [
        HomeComponent,
        LoginComponent,
        MessagesComponent,
        ProductsComponent,
        NavigationComponent,
        CategoriesComponent
    ]
})
export class PagesModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'PagesModule');
	}
}