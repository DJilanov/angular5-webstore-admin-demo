import { LanguageModel } from '../utils/language.model';
import { ProductModel } from '../products/product.model';

export class CategoryModel {
	id: string;
	title: LanguageModel;
	name: LanguageModel;
	products: Array<ProductModel>;
	zIndex: string;
	shownOnNav: boolean;
	link: string;
	isNew: boolean;

	constructor(
		id?: string,
		title?: LanguageModel,
		name?: LanguageModel,
		products?: Array<ProductModel>,
		zIndex?: string,
		shownOnNav?: boolean,
		link?: string,
		isNew?: boolean,
	) {
		this.id = id;
		this.title = title;
		this.name = name;
		this.products = products;
		this.zIndex = zIndex;
		this.shownOnNav = shownOnNav;
		this.link = link;
		this.isNew = isNew;
	}
}
