import { Injectable } from '@angular/core';
import { of, Subject, iif } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { Store } from '../../core/services/store';

@Injectable({
    providedIn: 'root'
})
export class LoadingStateService extends Store<boolean> {

    private updateLoading$: Subject<boolean> = new Subject();

    constructor() {
        super(false);
        this.updateLoading$
            .pipe(switchMap((val) => iif(() => val, of(true), of(false).pipe(delay(1000))))) //symulacja asynchroniczności kiedy false
            .subscribe((val) => super.setState(val));
    }

    setState(value: boolean) {
        this.updateLoading$.next(value);
    }

}
