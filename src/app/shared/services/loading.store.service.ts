import { Injectable } from '@angular/core';
import { of, iif } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class LoadingStateService extends Store<boolean> {

  constructor() {
    super(false);
  }

  setState(value: boolean) {
    of(value)
      .pipe(switchMap((val) => iif(() => val, of(true), of(false).pipe(delay(1000))))) //symulacja asynchroniczności kiedy false
      .subscribe((val) => super.setState(val));
  }

}
