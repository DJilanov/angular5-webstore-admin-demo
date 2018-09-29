import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WarrantiesService } from '../../services/warranties/warranties.service';

import { WarrantyModel } from '../../services/warranties/warranty.model';

@Component({
  selector: 'warranty-print',
  styleUrls: ['./warranty-print.component.scss'],
  templateUrl: './warranty-print.component.html'
})

export class WarrantyPrintComponent {
  public warranties: Array<WarrantyModel>;

  private warranty = {};
  public clientName = 'Test1234';
  public date = '28.28.28';

  constructor(
    private router: Router,
    private warrantiesService: WarrantiesService,
  ) {
    let routes = this.router.url.split('/');
    this.setWarranty(routes[routes.length - 1]);
    let date = new Date();
    this.date = date.getDate() + '.' + this.getMonth(date.getUTCMonth()) + '.' + date.getFullYear();
  };

  private getMonth(id) {
    switch(id) {
      case 0:
        return 'Януари';
      break;
      case 1:
        return 'Февруари';
      break;
      case 2:
        return 'Март';
      break;
      case 3:
        return 'Април';
      break;
      case 4:
        return 'Май';
      break;
      case 5:
        return 'Юни';
      break;
      case 6:
        return 'Юли';
      break;
      case 7:
        return 'Август';
      break;
      case 8:
        return 'Септември';
      break;
      case 9:
        return 'Октомври';
      break;
      case 10:
        return 'Ноември';
      break;
      case 11:
        return 'Декември';
      break;
    }
  } 

  private setWarranty(id) {
    this.warranty = this.warrantiesService.getWarrantyById(id);
  }
}
