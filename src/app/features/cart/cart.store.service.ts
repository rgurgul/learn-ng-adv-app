import { LoadingStateService } from './../../shared/services/loading.store.service';
import { Utils } from './../../utils/utils';
import { from, of, skip, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../core/services/store';
import { CartItemModel, ItemModel } from '../../utils/models';
import { CartIDBService } from './cart.idb.service';

export type CartActionTypes = 'addOrIncreaseParam' | 'removeOrDecreaseParam';
export interface CartAction {
  type: CartActionTypes,
  payload: any
}

@Injectable({ providedIn: 'root' })
export class CartStoreService extends Store<CartItemModel[]> {

  dispatch({ type, payload }: CartAction) {
    this.loadingService.setState(true);
    of(payload)
      .pipe(
        withLatestFrom(super.getState())
      )
      .subscribe(([item, state]) => {
        const nextState = Utils[type](state, item, 'count');
        super.setState(nextState);
        this.loadingService.setState(false);
      })
  }

  constructor(
    private cartIdb: CartIDBService,
    private loadingService: LoadingStateService
  ) {
    super([])
    super.getState().pipe(skip(1)).subscribe((state: any) => cartIdb.update(state))
    from(cartIdb.get()).subscribe((state: any) => super.setState(state));
  }

}
