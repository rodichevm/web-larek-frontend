export type TCategory =
	| 'софт-скил'
	| 'другое'
	| 'дополнительное'
	| 'кнопка'
	| 'хард-скил';
export type TOrderPayment = 'cash' | 'card';
export type FormErrors = Partial<Record<keyof IOrder, string>>;

export interface IAppState {
	catalog: IProduct[];
	order: IOrder;
	basket: IProduct[];
	preview: string | null;
}

export interface IProduct {
	_id: string;
	description: string;
	image: string;
	title: string;
	category: TCategory;
	price: number;
}

export interface IPage {
	catalog: HTMLElement[];
	locked: boolean;
	counter: number;
}

export interface ICard {
	id: string;
	title: string;
	description: string;
	image: string;
	category: string;
	price: number;
	textButton: string;
	selected: boolean;
}

export interface IBasket {
	total: number;
	products: HTMLElement[];
}

export interface IOrderForm {
	paymentMethod: TOrderPayment;
	address: string;
}

export interface IContactsForm {
	phone: string;
	email: string;
}

export interface IOrder extends IOrderForm, IContactsForm {
	items: string[];
	total: number;
}

export interface IOrderSuccess {
	id: string;
	total: number;
}
