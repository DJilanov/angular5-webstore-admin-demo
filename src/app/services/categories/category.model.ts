export class CategoryModel {
	title: {
		bg: string,
		en: string
	}
	name: {
		bg: string,
		en: string
	}
	products: Array<any>;
	zIndex: string;
	shownOnNav: boolean;
	link: string;
	isNew: boolean;

	constructor(
		title?: any,
		name?: any,
		products?: Array<any>,
		zIndex?: string,
		shownOnNav?: boolean,
		link?: string,
		isNew?: boolean,
	) {
		this.title = title;
		this.name = name;
		this.products = products;
		this.zIndex = zIndex;
		this.shownOnNav = shownOnNav;
		this.link = link;
		this.isNew = isNew;
	}
}
