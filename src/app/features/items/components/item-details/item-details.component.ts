import { ItemModel } from './../../../../utils/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-item-details',
  template: `
    <div>
      <div *ngFor="let item of data$|async|keyvalue">
        {{item.key}} : {{item.value}}

      </div>
    </div>
  `,
  styles: [
  ]
})
export class ItemDetailsComponent implements OnInit {
  data$: any;

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.data$ = this.route.data
      .pipe(
        pluck('item')
      )
  }

}
