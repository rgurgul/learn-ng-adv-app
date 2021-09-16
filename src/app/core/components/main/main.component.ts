import { ItemsStoreService } from './../../../features/items/items.service';
import { LoadingStateService } from './../../../shared/services/loading.store.service';
import { CartItemModel } from './../../../utils/models';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartStoreService } from '../../../features/cart/cart.store.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  cartLength$ = this.cartStore.getState().pipe(
    map((items: CartItemModel[]) =>
      items.reduce((acc, item) => item.count + acc, 0))
  );

  loading$: Observable<boolean> = this.loadingService.getState();

  total$ = this.itemsStore.getState().pipe(map((val)=>val.length))

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cartStore: CartStoreService,
    private loadingService: LoadingStateService,
    private itemsStore: ItemsStoreService
  ) { }

}
