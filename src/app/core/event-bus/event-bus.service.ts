import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

/**
 * @EventBusService used for connections between modules
 */
export class EventBusService {

	public requestError: EventEmitter<any>;
	public categoriesUpdate: EventEmitter<any>;

	public changeSharedOptions: EventEmitter<any>;

	

    public loggedIn: EventEmitter<any>;
    public dataFetched: EventEmitter<any>;
    public changedProduct: EventEmitter<any>;
    public showProductModal: EventEmitter<any>;
    public hideProductModal: EventEmitter<any>;

	constructor() {
		this.requestError = new EventEmitter();
		this.categoriesUpdate = new EventEmitter();

		this.changeSharedOptions = new EventEmitter();

		
        this.loggedIn = new EventEmitter();
        this.dataFetched = new EventEmitter();
        this.changedProduct = new EventEmitter();
        this.showProductModal = new EventEmitter();
        this.hideProductModal = new EventEmitter();
	}

	public emitRequestError(data) {
		this.requestError.emit(data);
	}
	
	public emitCategoriesUpdate(data) {
		this.categoriesUpdate.emit(data);
	}
	
	public emitChangeSharedOptions(data) {
		this.changeSharedOptions.emit(data);
	}


	
	
	public emitFetchedData(data) {
		this.dataFetched.emit(data);
	}

	public emitChangedProduct(product) {
		this.changedProduct.emit(product);
	}

	// admin

	public emitLoggedIn(loginData) {
		this.loggedIn.emit(loginData);
	}

	public emitShowProductModal(product) {
		this.showProductModal.emit(product);
	}

	public emitHideProductModal(empty) {
		this.hideProductModal.emit(empty);
	}
}
