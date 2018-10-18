import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { WarrantiesService } from '../../services/warranties/warranties.service';

import { WarrantyModel } from '../../services/warranties/warranty.model';

const sharredOptions = {
  header: true,
  footer: true
};

@Component({
  selector: 'warranties',
  styleUrls: ['./warranties.component.scss'],
  templateUrl: './warranties.component.html'
})

export class WarrantiesComponent {
  public warranties: Array<WarrantyModel>;

  public searchData = {
    id: '',
    type: '',
    serial: ''
  };

  constructor(
    private router: Router,
    private warrantiesService: WarrantiesService,
  ) {
    this.warranties = this.warrantiesService.getWarranties().reverse();
  };

  public viewWarranty(warranty) {
    this.router.navigate(['/print-warranties', warranty.id]);
  }

  public editWarranty(warranty) {
    this.router.navigate(['/warranties', warranty.id]);
  }

  public deleteWarranty(warranty) {
    this.warrantiesService.deleteWarranty(warranty).subscribe((response) => {
      this.warranties = this.warrantiesService.getWarranties().reverse();
    });
  }

  public filterWarranties(event) {

  }
}
