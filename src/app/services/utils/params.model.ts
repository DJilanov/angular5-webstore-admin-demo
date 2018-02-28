export class ParamsModel extends Array {
	bg: string[];
	en: string[];

	constructor(
		bg?: string[],
		en?: string[],
	) {
        super();
		this.bg = bg;
		this.en = en;
	}
}
