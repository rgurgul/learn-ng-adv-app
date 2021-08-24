import { map } from 'rxjs/operators';
import { HttpResponseModel, ItemModel } from './../../../../utils/models';
import { Observable } from 'rxjs';
import { Api } from './../../../../utils/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  data$!: Observable<ItemModel[]>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.data$ = this.http.get<HttpResponseModel>(Api.ITEMS_END_POINT).pipe(map((resp: HttpResponseModel) => resp.data))
  }

  buy(item:ItemModel){
    debugger;
  }

}
