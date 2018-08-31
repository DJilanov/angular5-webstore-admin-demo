import { Injectable, EventEmitter } from '@angular/core';

import { OrderModel } from './order.model';

import { EventBusService } from '../../core/event-bus/event-bus.service';


@Injectable()

/**
 * @MessagesService used to contain the messages and work over them
 */
export class OrdersService {
    /**
    * @info: Contains all of the orders
    */
    private ordersArray: Array<OrderModel>;
    
    constructor(
        private eventBusService: EventBusService
    ) {
        // this.eventBusService.messagesUpdate.subscribe((eventData) => this.setMessages(eventData.messages));
    }

    /**
    * @getOrders get all orders
    * @return {Array} all orders
    */
    public getOrders() {
        return this.ordersArray;
    }

    /**
    * @setOrders set all orders
    */
    public setOrders(orders: OrderModel[]) {
        this.ordersArray = orders;
        this.emitOrders();
    }

    /**
    * @removeOrder remove order from the orders
    */
    public removeOrder(response) {
        let id = response.response;
        for(let orderCounter = 0; orderCounter < this.ordersArray.length; orderCounter++) {
            if(this.ordersArray[orderCounter]['id'] == id) {
                this.ordersArray.splice(orderCounter, 1);
                break;
            }
        }
        this.emitOrders();
    }

    /**
    * @emitOrders emit the orders to the components
    */
    public emitOrders() {
        this.eventBusService.emitOrdersUpdate({
            orders: this.ordersArray
        });
    }

}
