import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WarrantiesService } from '../../services/warranties/warranties.service';
import { WarrantyModel } from '../../services/warranties/warranty.model';
import { WarrantyItemModel } from '../../services/warranties/warranty-item.model';


@Component({
  selector: 'warranty-edit',
  styleUrls: ['./warranty-edit.component.scss'],
  templateUrl: './warranty-edit.component.html'
})

export class WarrantyEditComponent {

  public warranty: any;

  public isNew = true;

  public disableSubmit = false;

  constructor(
    private router: Router,
    private warrantiesService: WarrantiesService
  ) {
    let routes = this.router.url.split('/');
    this.updateWarranty(routes[routes.length - 1]);
  };

  private updateWarranty(id) {
    let object: any = this.warrantiesService.getWarrantyById(id);
    if (object) {
      this.isNew = false;
    }
    if (this.isNew) {
      this.warranty = {
        id: '',
        warrantyNumber: '',
        name: '',
        items: [
          {
            name: '',
            serials: [
              ''
            ]
          }
        ]
      }
    } else {
      this.warranty = object;
    }
  }

  public removeProduct(index) {
    this.warranty.items.splice(index, 1)
  }

  public addProduct() {
    this.warranty.items.push({
      name: '',
      time: 0,
      serials: []
    })
  }

  public removeSerial(prodIndex, serialIndex) {
    this.warranty.items[prodIndex].serials.splice(serialIndex, 1);
  }

  public addSerial(prodIndex) {
    this.warranty.items[prodIndex].serials.push('');
  }

  public deleteWarranty() {
    this.warrantiesService.deleteWarranty(this.warranty).subscribe(() => {
      this.router.navigate(['/warranties']);
    });
  }

  public saveWarranty() {
    this.warrantiesService.saveWarranty(this.warranty, this.isNew).subscribe((response: any) => {
      if (this.isNew) {
        this.warrantiesService.pushWarranty(response.json().response);
      } else {
        this.warrantiesService.editWarranty(response.json().response);
      }
      this.router.navigate(['/warranties']);
    });
  }

  public trackByFn(index: any, item: any) {
    return index;
  }

  public handleKey(event, prodIndex) {
    if (event.keyCode == 13) {
      this.addSerial(prodIndex);
    }
  }
}
