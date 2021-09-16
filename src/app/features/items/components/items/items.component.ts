import { CartStoreService } from './../../../cart/cart.store.service';
import { ItemModel } from './../../../../utils/models';
import { Observable } from 'rxjs';
import { ItemsStoreService } from './../../items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items$: Observable<ItemModel[]> = this.itemsStore.getState();

  constructor(
    private itemsStore: ItemsStoreService,
    private cartStore: CartStoreService
  ) { }

  ngOnInit(): void {
    //this.itemsStore.fetch()
  }

  buy(item: ItemModel) {
    this.cartStore.dispatch({type: 'addOrIncreaseParam', payload: item})
  }

}
