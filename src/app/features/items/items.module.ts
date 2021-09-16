import { ItemsGuard } from './items.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/items/items.component';
import { DataGridModule } from "demo-ng-kolekto";

@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', canActivate: [ItemsGuard], component: ItemsComponent }
    ]),
    DataGridModule
  ]
})
export class ItemsModule { }
