import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../core/backend/backend.service';
import { EventBusService } from '../../core/event-bus/event-bus.service';
import { ErrorHandlerService } from '../../core/error-handler/error-handler.service';

import { AuthService } from '../../services/auth/auth.service';
import { OrdersService } from '../../services/orders/orders.service';
import { ProductsService } from '../../services/products/products.service';

import { MessageModel } from '../../services/messages/message.model';

const sharredOptions = {
	header: true,
	footer: true
};

@Component({
    selector: 'orders',
    styleUrls: ['./orders.component.scss'],
    templateUrl: './orders.component.html'
})

export class OrdersComponent {

    public orders: Array<MessageModel>;

    constructor(
        private router: Router,
        private authService: AuthService,
        private backendService: BackendService,
        private eventBusService: EventBusService,
        private ordersService: OrdersService,
        private productsService: ProductsService,
        private errorHandlerService: ErrorHandlerService
    ) {
        this.orders = ordersService.getOrders();
        this.eventBusService.emitChangeSharedOptions(sharredOptions);
        this.eventBusService.ordersUpdate.subscribe(orders => this.updateOrders(orders));
    };
    
    public updateOrders(eventData) {
        this.orders = eventData.orders;
    }
    
    public delete(order) {
        let loginData = this.authService.getLoginData();
        this.backendService.deleteOrder({
            order: {
              id: order.id
            },
            username: loginData['username'],
            password: loginData['password']
        }).subscribe(
            data => this.ordersService.removeOrder(data.json()),
            err => this.errorHandlerService.handleRequestError(err)
        );
    }

    public getProductTitle(id) {
      return this.productsService.getProductById(id).title['en'];
    }
}
