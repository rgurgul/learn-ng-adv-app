import { map } from 'rxjs/operators';
import { Api } from './../../utils/api';
import { ItemModel, HttpResponseModel } from './../../utils/models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ItemsService {
  constructor(private httpClient: HttpClient) { }

  get():Observable<ItemModel[]>{
    return this.httpClient.get<HttpResponseModel>(Api.ITEMS_END_POINT).pipe(map((resp: HttpResponseModel) => resp.data))
  }
}
