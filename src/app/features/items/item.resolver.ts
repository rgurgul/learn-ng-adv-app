import { map } from 'rxjs/operators';
import { ItemModel } from './../../utils/models';
import { tap, filter, take } from 'rxjs/operators';
import { ItemsService } from './items.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, mapTo } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<ItemModel> {

  constructor(
    private itemsService: ItemsService
  ) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<ItemModel> {
    return this.itemsService.getState()
      .pipe(
        map((arr: ItemModel[]) => arr.find((item: ItemModel) => item.id === route.params.id)),
        filter((val: any) => !!val),
        take(1)
      )
  }
}
