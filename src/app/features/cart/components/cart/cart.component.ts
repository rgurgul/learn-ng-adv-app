import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartStoreService } from '../../cart.store.service';
import { CartItemModel } from '../../../../utils/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items$: Observable<CartItemModel[]> = this.cartStore.getState();

  constructor(
    private cartStore: CartStoreService
  ) { }

  ngOnInit(): void {
  }

  add(item: CartItemModel) {
    this.cartStore.dispatch({ type: 'addOrIncreaseParam', payload: item });
  }

  remove(item: any) {
    this.cartStore.dispatch({ type: 'removeOrDecreaseParam', payload: item });
  }

}
