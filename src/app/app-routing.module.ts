import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './core/login-guard/login-guard.service';

// Admin Views
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NavigationComponent } from './pages/navigation/navigation.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  // }, { 
  //   path: 'home', 
  //   component: HomeComponent,
  //   data: {
  //     title: 'Home'
  //   },
	// 	canActivate: [LoginGuard]
  }, { 
    path: 'navigation', 
    component: NavigationComponent,
    data: {
      title: 'Navigation'
    },
		canActivate: [LoginGuard]
  }, { 
    path: 'products', 
    component: ProductsComponent,
    data: {
      title: 'Products'
    },
		canActivate: [LoginGuard]
  }, { 
    path: 'categories', 
    component: CategoriesComponent,
    data: {
      title: 'Categories'
    },
		canActivate: [LoginGuard]
  }, { 
    path: 'messages', 
    component: MessagesComponent,
    data: {
      title: 'Messages'
    },
		canActivate: [LoginGuard]
  }, {
    path: '**', 
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }