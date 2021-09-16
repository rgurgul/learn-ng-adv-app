import { BehaviorSubject, Observable } from 'rxjs';

export abstract class Store<T> {
  private state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this.state$ = new BehaviorSubject(initialState);
  }

  getState(): Observable<T> {
    return this.state$.asObservable();
  }

  setState(nextState: T): void {
    this.state$.next(nextState);
  }
}
