import { WarrantyItemModel } from './warranty-item.model';

export class WarrantyModel {
	id: string;
	warrantyNumber: number;
	items: WarrantyItemModel[];

	constructor(
    id?: string,
		warrantyNumber?: number,
		items?: WarrantyItemModel[]
	) {
    this.id = id;
		this.warrantyNumber = warrantyNumber;
		this.items = items;
	}
}
