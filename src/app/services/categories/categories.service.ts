import { Injectable, EventEmitter } from '@angular/core';

import { EventBusService } from '../../core/event-bus/event-bus.service';

@Injectable()

/**
 * @CategoriesService used to contain the categories and work over them
 */
export class CategoriesService {
    /**
    * @info: Contains all of the categories
    */
    public categoryArray = Array<Object>();
    
    constructor(
        private eventBusService: EventBusService
    ) {
        eventBusService.categoriesUpdate.subscribe((eventData) => this.setCategories(eventData.categories));
    }

    /**
    * @getCategories get all categories
    * @return {Array} all categoties
    */
    public getCategories() {
        return this.categoryArray;
    }

    /**
    * @setCategories set all categories
    */
    public setCategories(categories) {
        this.categoryArray = categories;
    }
    
    /**
    * @getCategoryByLink set all categories
    */
    public getCategoryByLink(link) {
        for(var categoryCounter = 0; categoryCounter < this.categoryArray.length; categoryCounter++) {
            if(this.categoryArray[categoryCounter]['link'] == link) {
                return this.categoryArray[categoryCounter];
            }
        }
    }

    public removeCategory(id) {
        for(var categoryCounter = 0; categoryCounter < this.categoryArray.length; categoryCounter++) {
            if(this.categoryArray[categoryCounter]['_id'] == id) {
                this.categoryArray.splice(categoryCounter, 1);
        // fire event and upadte everywhere in the admin
                return;
            }
        }
    }
}
