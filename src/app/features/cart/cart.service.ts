import { CartIDBService } from './../../shared/services/idb.cart.service';
import { from, of, skip, withLatestFrom } from 'rxjs';
import { Utils } from './../../utils/utils';
import { CartItemModel, ItemModel } from './../../utils/models';
import { Injectable } from '@angular/core';
import { Store } from '../../utils/store';

@Injectable({ providedIn: 'root' })

export class CartService extends Store<CartItemModel[]> {
  constructor(
    idbCartService: CartIDBService
  ) {
    super([]);

    this.getState()
      .pipe(
        skip(1)
      )
      .subscribe((state) => {
        idbCartService.update(state);
      })

    from(idbCartService.get()).subscribe((data: any) => {
      this.setState(data);
    })
  }

  addItem(item: ItemModel) {
    of(item)
      .pipe(
        withLatestFrom(this.getState())
      )
      .subscribe(([item, state]) => {
        const result: CartItemModel[] = Utils.addOrIncreaseParam(state, item, 'count')
        this.setState(result);
      })
  }

}
