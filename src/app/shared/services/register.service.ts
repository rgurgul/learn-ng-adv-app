import { FieldConfig } from './../../utils/models';
import { Api } from './../../utils/api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegisterService {

  formConfig$: Observable<any>;

  constructor(private httpClient: HttpClient) {
    this.formConfig$ = this.httpClient
      .get<{ data: FieldConfig[] }>(Api.DATA_FORM_CONFIG)
      .pipe(map((resp: { data: FieldConfig[] }) => resp.data));
  }

}
