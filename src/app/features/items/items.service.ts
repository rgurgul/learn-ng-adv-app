import { map } from 'rxjs/operators';
import { Api } from './../../utils/api';
import { ItemModel, HttpResponseModel } from './../../utils/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../utils/store';

@Injectable({ providedIn: 'root' })
export class ItemsService extends Store<ItemModel[]> {
  constructor(private httpClient: HttpClient) {
    super([]);
  }

  get() {
    this.httpClient
      .get<HttpResponseModel>(Api.ITEMS_END_POINT)
      .pipe(map((resp: HttpResponseModel) => resp.data))
      .subscribe((data: ItemModel[]) => {
        super.setState(data);
      })
  }
}
