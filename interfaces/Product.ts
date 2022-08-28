export interface ProductBase {
	description: string;
	images: string[];
	stock: number;
	price: number;
	sizes: Size[];
	slug: string;
	tags: string[];
	title: string;
	type: Type;
	gender: "men" | "women" | "kid" | "unisex";
}

export interface Product extends ProductBase {}

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

export type Type = "shirts" | "pants" | "hoodies" | "hats";
