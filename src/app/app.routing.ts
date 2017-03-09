// Angular 2 Modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Admin Views
import { AdminComponent } from './components/admin/admin.component';
import { AdminMessagesComponent } from './components/admin-messages/admin_messages.component';
import { AdminProductsComponent } from './components/admin-products/admin_products.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin_categories.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin_navigation.component';

const appRoutes: Routes = [
  { 
    path: 'admin', 
    component: AdminComponent,
    data: {
      title: 'Admin'
    }
  }, { 
    path: 'admin/navigation', 
    component: AdminNavigationComponent,
    data: {
      title: 'Navigation'
    }
  }, { 
    path: 'admin/products', 
    component: AdminProductsComponent,
    data: {
      title: 'Products'
    }
  }, { 
    path: 'admin/categories', 
    component: AdminCategoriesComponent,
    data: {
      title: 'Categories'
    }
  }, { 
    path: 'admin/messages', 
    component: AdminMessagesComponent,
    data: {
      title: 'Messages'
    }
  }, { 
    // TODO
    path: 'admin/orders', 
    component: AdminComponent,
    data: {
      title: 'Orders'
    }
  }, { 
    path: '**', 
    component: AdminComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);