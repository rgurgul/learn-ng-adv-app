import { ItemsGuard } from './items.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './components/items/items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemResolver } from './item.resolver';



@NgModule({
  declarations: [ItemsComponent, ItemDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', canActivate: [ItemsGuard], component: ItemsComponent, children: [
          { path: ':id', resolve:{item: ItemResolver}, component: ItemDetailsComponent }
        ]
      }
    ])
  ]
})

export class ItemsModule { }
