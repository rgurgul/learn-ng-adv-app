import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { DataGridModule } from "demo-ng-kolekto";

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartComponent }
    ]),
    DataGridModule
  ]
})
export class CartModule { }
