import { Observable } from 'rxjs';

/**
 * Services & Responses
 */
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

export interface AuthServiceModel {
  logged(): void;
  logIn(value: AuthDataModel): void;
  logOut(): void;
}

export interface AuthDataModel {
  username: string;
  password: string;
}

export interface ItemModel {
  id?: number;
  category: string;
  imgSrc: string;
  price: number;
  title: string;
}

export interface WorkerModel {
  id?: number;
  category: string;
  name: string;
  phone: number;
}

/**
 * Game
 */
export interface Message {
  username?: string;
  clientX: number;
  clientY: number;
  size?: number;
  action?: string;
  type?: string;
}
