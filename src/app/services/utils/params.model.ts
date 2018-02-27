export class ParamsModel {
	bg: string[];
	en: string[];

	constructor(
		bg?: string[],
		en?: string[],
	) {
		this.bg = bg;
		this.en = en;
	}
}
