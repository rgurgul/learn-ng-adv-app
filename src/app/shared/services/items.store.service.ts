import { HttpResponseModel, ItemModel } from './../models/services.models';
import { map } from 'rxjs/operators';
import { Api } from './../../shared/utils/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsStoreService {

  constructor(
    private http: HttpClient
  ) { }

  fetch() {
    this.http
      .get<HttpResponseModel>(Api.ITEMS_END_POINT)
      .pipe(map((resp: HttpResponseModel) => resp.data))
      .subscribe((data: ItemModel[]) => {
        debugger;
      })
  }

}
