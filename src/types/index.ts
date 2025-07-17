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
	preview: IProduct | null;
}

export interface IProduct {
	id: string;
	description: string;
	image: string;
	title: string;
	category: TCategory;
	price: number;
}

export interface ICard extends IProduct {
	index?: string;
	textButton?: string;
}

export interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export interface IPage {
	catalog: HTMLElement[];
	locked: boolean;
	counter: number;
}

export interface IModalData {
	content: HTMLElement;
}

export interface IFormState {
	valid: boolean;
	errors: string[];
}

export interface IBasketView {
	total: number;
	items: HTMLElement[];
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

export interface ISuccess {
	id: string;
	total: number;
}
