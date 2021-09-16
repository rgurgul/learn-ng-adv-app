import { HttpResponseModel, ItemModel } from './../../utils/models';
import { Api } from './../../utils/api';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../core/services/store';

@Injectable({ providedIn: 'root' })
export class ItemsStoreService extends Store<ItemModel[]> {

  constructor(private httpClient: HttpClient) {
    super([]);
  }


  fetch() {
    this.httpClient.get<HttpResponseModel>(Api.ITEMS_END_POINT).subscribe((resp: HttpResponseModel) => {
      super.setState(resp.data);
    })
  }

}
