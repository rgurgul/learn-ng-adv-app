import { Component, OnInit, Input } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent implements OnInit {

  @Input() loading!: boolean | null;
  routing$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(ev => {
      if (ev instanceof RouteConfigLoadStart) this.routing$.next(true);
      else if (ev instanceof RouteConfigLoadEnd) this.routing$.next(false);
    });
  }

}
