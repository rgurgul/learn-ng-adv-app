import { Message } from '../utils/services.models';
import { Api } from '../utils/api';
import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameApiService {

  ws!: Subject<any>;

  constructor(private http: HttpClient) { }

  register(username: string): Observable<any> {
    return this.http.post(
      Api.GAME_REGISTER_USER,
      { username },
      { withCredentials: true }
    );
  }

  getUser(): Observable<any> {
    return this.http.get(Api.GAME_GET_USER, { withCredentials: true });
  }

  get messanger(): Subject<Message> {
    return this.ws ? this.ws : (this.ws = webSocket(Api.GAME_PLAY));
  }
}
