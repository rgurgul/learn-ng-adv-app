import { tap, filter, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { mapTo, Observable } from 'rxjs';
import { ItemsStoreService } from './items.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsGuard implements CanActivate {
  constructor(
    private itemsStore: ItemsStoreService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.itemsStore.getState().pipe(
      tap(console.log),
      tap((state: any[]) => !state.length && this.itemsStore.fetch()),
      filter((state: any[]) => !!state.length),
      mapTo(true)
    );
  }

}
