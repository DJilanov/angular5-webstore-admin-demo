// Angular 2 Modules
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule, ReactiveFormsModule, Validators }   from '@angular/forms';
import { RecaptchaModule, RecaptchaLoaderService } from 'ng2-recaptcha';

// Router
import { routing, appRoutingProviders } from './app.routing';

// Language 
import { Dictionary } from './dictionary/dictionary.service';
import { EnglishDictionary } from './dictionary/en.dictionary';
import { BulgarianDictionary } from './dictionary/bg.dictionary';

// Admin
import { AppComponent } from './app.component';
import { Ng2DragDropModule } from "ng2-drag-drop";

import { AdminComponent } from './components/admin/admin.component';
import { FormComponent } from './components/form/form.component';
import { ImageComponent } from './components/image/image.component';
import { AdminHomeComponent } from './components/admin-home/admin_home.component';
import { AdminMessagesComponent } from './components/admin-messages/admin_messages.component';
import { AdminProductsComponent } from './components/admin-products/admin_products.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin_categories.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin_navigation.component';
import { AdminProductModalComponent } from './components/admin-product-modal/admin_product_modal.component';

import { AuthService } from './services/auth.service';

// Config
import { Config } from './config';

// Services
import { FetcherService } from './services/fetcher.service';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { EventEmiterService } from './services/event.emiter.service';
import { ErrorHandlerService } from './services/error.handler.service';

@NgModule({
    // Modules & Libs
    imports: [
        routing,
        HttpModule,
        FormsModule,
        BrowserModule,
        RecaptchaModule,
        Ng2BootstrapModule,
        ReactiveFormsModule,
        // admin
        Ng2DragDropModule
    ],
    // Components & Views
    declarations: [ 
        AppComponent,
        FormComponent,
        ImageComponent,
        AdminComponent,
        AdminHomeComponent,
        AdminMessagesComponent,
        AdminProductsComponent,
        AdminCategoriesComponent,
        AdminNavigationComponent,
        AdminProductModalComponent,
    ],
    // Bootstraping
    bootstrap: [ 
        AppComponent 
    ],
    // Services
    providers: [
        // config of the app
        Config,
        // router of the app
        appRoutingProviders,
        // languages
        Dictionary,
        EnglishDictionary,
        BulgarianDictionary,
        FetcherService,
        CategoriesService,
        ProductsService,
        EventEmiterService,
        ErrorHandlerService,
        AuthService,
        // recaptcha
        RecaptchaLoaderService
    ]
})

export class AppModule { }