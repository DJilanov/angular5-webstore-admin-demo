export class WarrantyItemModel {
	type: string;
	serial: string;
  warrantyTime: number;
  
	constructor(
		type?: string,
		serial?: string,
		warrantyTime?: number
	) {
		this.type = type;
		this.serial = serial;
		this.warrantyTime = warrantyTime;
	}
}
