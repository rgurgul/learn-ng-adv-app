import { CartService } from './../../../features/cart/cart.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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


  cartCount$: Observable<number> = this.cartStoreService
    .getState()
    .pipe(map((state: any[]) => state.reduce((acc, arr) => arr.count + acc, 0)));

  constructor(
    private cartStoreService: CartService,
    private breakpointObserver: BreakpointObserver
  ) {

  }

}
