import { ItemsService } from './../../items.service';
import { CartService } from './../../../cart/cart.service';
import { map } from 'rxjs/operators';
import { HttpResponseModel, ItemModel } from './../../../../utils/models';
import { Observable } from 'rxjs';
import { Api } from './../../../../utils/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  data$: Observable<ItemModel[]> = this.itemsService.get();

  constructor(
    private cartStoreService: CartService,
    private itemsService:ItemsService
  ) {
    this.cartStoreService.getState().subscribe(console.log)
   }

  ngOnInit(): void {

  }

  buy(item: ItemModel) {
    //this.cartStoreService.setState([{ ...item, count:1 }]);
    this.cartStoreService.addItem(item);
  }

}
