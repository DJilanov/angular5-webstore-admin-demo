import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import { environment } from 'environments/environment';
@Injectable()
export class BackendService {

	constructor(
		private http: Http
	) { 

	}

	backendRequest(requestTarget, requestType, requestData?) {
		if (requestType === 'post') {
			return this.http.post(environment.apiUrl + requestTarget, requestData);
		} else if (requestType === 'get') {
			return this.http.get(environment.apiUrl + requestTarget, {
				params: requestData 
			});
		}
	}
    /**
    * @getCategories get all categories
    * @return {Array} categories
    */
    public getCategories() {
		return this.backendRequest('get', 'categories');
    }
    /**
    * @getProducts get all products
    * @return {Array} products
    */
    public getProducts() {
		return this.backendRequest('get', 'products');
    }
    /**
    * @getProducts get products and categories
    * @return {Array} products and categories
    */
    public getProductsAndCategories() {
		return this.backendRequest('get', 'productsAndCategories');
    }
    /**
    * @sendMessage send message to the back-end service
    * @return {Object} response of the back-end
    */
    public sendMessage(body) {
        return this.backendRequest('post', 'message', body);
    }
    /**
    * @sendOrder send order to the back-end service
    * @return {Object} response of the back-end
    */
    public sendOrder(body) {
        return this.backendRequest('post', 'order', body);
    }
    /**
    * @adminLogin send request with login data to the back-end
    * @return {Object} response of the back-end
    */
    public adminLogin(body) {
        return this.backendRequest('post', 'admin/login', body);
    }
    /**
    * @createProduct send request with new product
    * @return {Object} response of the back-end
    */
    public createProduct(body) {
        let request = Object.assign(body, {'type': 'create'});
        return this.backendRequest('post', 'products', request);
    }
    /**
    * @updateProduct send request with changed product
    * @return {Object} response of the back-end
    */
    public updateProduct(body) {
        let request = Object.assign(body, {'type': 'update'});
        return this.backendRequest('post', 'products', request);
    }
    /**
    * @deleteProduct send request with product for deletion
    * @return {Object} response of the back-end
    */
    public deleteProduct(body) {
        let request = Object.assign(body, {'type': 'delete'});
        return this.backendRequest('post', 'products', request);
    }
    /**
    * @createCategories send request with new category
    * @return {Object} response of the back-end
    */
    public createCategories(body) {
        let request = Object.assign(body, {'type': 'create'});
        return this.backendRequest('post', 'categories', request);
    }
    /**
    * @updateCategories send request with changed categories array
    * @return {Object} response of the back-end
    */
    public updateCategories(body) {
        let request = Object.assign(body, {'type': 'update'});
        return this.backendRequest('post', 'categories', request);
    }
    /**
    * @deleteCategory send request with category for deletion
    * @return {Object} response of the back-end
    */
    public deleteCategory(body) {
        let request = Object.assign(body, {'type': 'delete'});
        return this.backendRequest('post', 'categories', request);
    }
    /**
    * @getMessages get all messages
    * @return {Array} messages
    */
    public getMessages(body) {
        let request = Object.assign(body, {'type': 'get'});
        return this.backendRequest('post', 'message', request);
    }
    /**
    * @deleteMessage send request with message for deletion
    * @return {Object} response of the back-end
    */
    public deleteMessage(body) {
        let request = Object.assign(body, {'type': 'delete'});
        return this.backendRequest('post', 'message', request);
    }

}
