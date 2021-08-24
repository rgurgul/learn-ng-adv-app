import { HttpResponseModel } from './../../../../utils/models';
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
  data$!: Observable<HttpResponseModel>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.data$ = this.http.get<HttpResponseModel>(Api.ITEMS_END_POINT)
  }

}
