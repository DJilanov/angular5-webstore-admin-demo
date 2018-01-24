import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

/**
 * @EventBusService used for connections between modules
 */
export class EventBusService {

    public loggedIn: EventEmitter<any>;
    public dataFetched: EventEmitter<any>;
	public requestError: EventEmitter<any>;
	public productsUpdate: EventEmitter<any>;
	public messagesUpdate: EventEmitter<any>;
	public categoriesUpdate: EventEmitter<any>;

	public changeSharedOptions: EventEmitter<any>;

	constructor() {
        this.loggedIn = new EventEmitter();
        this.dataFetched = new EventEmitter();
		this.requestError = new EventEmitter();
		this.productsUpdate = new EventEmitter();
		this.messagesUpdate = new EventEmitter();
		this.categoriesUpdate = new EventEmitter();

		this.changeSharedOptions = new EventEmitter();		
	}
	
	public emitFetchedData(data) {
		this.dataFetched.emit(data);
	}

	public emitLoggedIn(loginData) {
		this.loggedIn.emit(loginData);
	}

	public emitRequestError(data) {
		this.requestError.emit(data);
	}
	
	public emitProductsUpdate(data) {
		this.productsUpdate.emit(data);
	}
	
	public emitMessagesUpdate(data) {
		this.messagesUpdate.emit(data);
	}
	
	public emitCategoriesUpdate(data) {
		this.categoriesUpdate.emit(data);
	}
	
	public emitChangeSharedOptions(data) {
		this.changeSharedOptions.emit(data);
	}
}
