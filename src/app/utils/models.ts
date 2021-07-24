import { Observable } from 'rxjs';
import { Validators } from "@angular/forms";

export interface HttpServiceModel {
  fetch(filters?: { [key: string]: any }): Observable<any>;
  get(id: number): Observable<any>;
  add(item: any): Observable<any>;
  update(item: any): Observable<any>;
  remove(id: number): Observable<any>;
}

export interface HttpResponseModel {
  data: any[];
  total: number;
  message: string;
  error: string;
  accessToken: string;
  refreshToken: string;
}
export interface AuthServiceInterface {
  logged(): void;
  logIn(value: AuthDataModel): void;
  logOut(): void;
}

export interface AuthDataModel {
  username: string;
  password: string;
}

export interface UserProfile {
  username: string;
  _id: string;
}

export interface AuthResponse {
  accessToken: string;
  message: string;
  error?: string;
}

export interface ItemModel {
  id?: number;
  category: string;
  imgSrc: string;
  price: number;
  title: string;
}

export interface ItemsStateModel {
  readonly data: ItemModel[];
  readonly loading: boolean;
}

export interface CartItemModel extends ItemModel {
  count: number;
}

export interface CartState {
  readonly data: CartItemModel[];
  readonly loading: boolean;
}

export interface DataGridItemModel {
  key: string;
  type?: string;
  header?: string;
  access?: string;
}

export class DataGridFieldTypes {
  static INPUT = 'input';
  static IMAGE = 'img';
  static BUTTON = 'button';
}

export class WorkerModel {
  constructor(
    public id: number | null = null,
    public name: string,
    public phone: number,
    public category: string = 'sales') { }
}
export interface Message {
  username?: string;
  clientX: number;
  clientY: number;
  size?: number;
  action?: string;
  type?: string;
}
export class FilterTypes {
  static TITLE = 'title';
  static PRICE_FROM = 'priceFrom';
  static CATEGORY = 'category';
  static CURRENT_PAGE = 'currentPage';
  static ITEMS_PER_PAGE = 'itemsPerPage';
}

export interface ItemsFiltersModel {
  title?: string;
  priceFrom?: number;
  category?: string;
  currentPage: number;
  itemsPerPage: number;
}

export class ItemsFilters {
  constructor(
    public title = '',
    public priceFrom = 0,
    public category = '',
    public currentPage = 1,
    public itemsPerPage = 5) {
  }
}

export interface ActionModel {
  type?: string;
  payload?: any;
  errors?: any;
}

export enum FieldTypes {
  input = 'input',
  password = 'password',
  contenteditable = 'contenteditable',
  textarea = 'textarea',
  select = 'select',
  radio = 'radio',
  button = 'button'
}

export interface FieldConfig {
  name: string;
  type: FieldTypes;
  label?: string;
  value?: string;
  placeholder?: string;
  options?: string[];
  direction?: 'horizontal' | 'vertical',
  validators?: FieldValidator[];
  id?: string;
  cssClass?: string;
}

export interface FieldValidator {
  name: keyof typeof Validators;
  param?: any;
  message: string;
}

export enum FormEvents {
  submit = 'submit',
  update = 'update'
}

export interface FormValue {
  type: FormEvents,
  payload: {},
  errors?: any[] | null;
}

export function createFieldConfig(
  name: string,
  type: FieldTypes,
  label?: string,
  value?: string,
  placeholder?: string,
  cssClass?: string,
  validators?: FieldValidator[],
  options?: string[],
  id?: string): FieldConfig {
  return { type, name, label, value, placeholder, cssClass, validators, options, id }
}

