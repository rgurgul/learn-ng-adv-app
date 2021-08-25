import { filter, take, tap } from 'rxjs/operators';
import { ItemsService } from './items.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { mapTo, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsGuard implements CanActivate {

  constructor(
    private itemsService: ItemsService
  ) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.itemsService
      .getState()
      .pipe(
        tap((state:any[])=>{
          console.log('x');
          if(!state.length) this.itemsService.get();
        }),
        filter((state:any[])=>!!state.length),
        take(1),
        mapTo(true)
      )
  }

}
