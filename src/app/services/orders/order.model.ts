export class OrderModel {
	id: string;
	name: string;
	email: string;
	phone: string;
	message: string;
  date: Date;
  products: Array<any>
	orderId: string;

	constructor(
		id?: string,
		name?: string,
		email?: string,
		phone?: string,
		message?: string,
    date?: Date,
    products?: Array<any>,
    orderId?: string
	) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.message = message;
    this.date = date;
    this.products = products;
    this.orderId = orderId;
	}
}
