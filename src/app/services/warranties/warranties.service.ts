import { Injectable, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { BackendService } from '../../core/backend/backend.service';

import { WarrantyModel } from './warranty.model';

@Injectable()

export class WarrantiesService {
  constructor(
    private authService: AuthService,
    private backendService: BackendService
  ) {

  }
  private warranties: WarrantyModel[];

  public getWarranties() {
    return this.warranties;
  }

  public setWarranties(warranties: WarrantyModel[]) {
    this.warranties = warranties;
  }

  public saveWarranty(warranty, isNew) {
    let loginData = this.authService.getLoginData();
    let request = {
      warranty: warranty,
      username: loginData['username'] || 'toni-website',
      password: loginData['password'] || 'toni1221'
    };
    if (isNew) {
      return this.backendService.createWarranty(request);
    } else {
      return this.backendService.updateWarranty(request);
    }
  }

  public deleteWarranty(warranty) {
    let loginData = this.authService.getLoginData();
    let request = {
      warranty: warranty,
      username: loginData['username'],
      password: loginData['password']
    };
    for (var warrantyCounter = 0; warrantyCounter < this.warranties.length; warrantyCounter++) {
      if (this.warranties[warrantyCounter].id.toString() == warranty.id) {
        this.warranties.splice(warrantyCounter, 1);
        break;
      }
    }
    return this.backendService.deleteWarranty(request);
  }

  public getWarrantyById(id) {
    for(let counter = 0; counter < this.warranties.length; counter++) {
      if(this.warranties[counter].id === id) {
        return this.warranties[counter];
      }
    }
  }

  public pushWarranty(warranty) {
    this.warranties.push(warranty);
  }

  public editWarranty(warranty) {
    for (var warrantyCounter = 0; warrantyCounter < this.warranties.length; warrantyCounter++) {
      if (this.warranties[warrantyCounter].id.toString() == warranty.id) {
        this.warranties[warrantyCounter] = warranty;
        break;
      }
    }
  }
}
