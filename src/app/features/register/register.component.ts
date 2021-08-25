import { map, retry, switchMap } from 'rxjs/operators';
import { throwError, of, fromEvent } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GameApiService } from './../../shared/services/game.service';
import { Component, OnInit, TemplateRef, ViewChild, ElementRef, ViewContainerRef, EmbeddedViewRef } from '@angular/core';
import { Message } from '../../utils/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild(TemplateRef) playerTpl!: TemplateRef<{ $implicit: Message }>;
  players: Map<string, EmbeddedViewRef<{ $implicit: Message }>> = new Map();

  constructor(
    private gameService: GameApiService,
    private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.gameService.getUser()
      .pipe(
        catchError((err) => {
          this.register();
          return throwError(err);
        })
      )
      .subscribe((resp) => {
        this.init();
      })
  }

  init() {
    this.gameService.messanger.subscribe((resp) => {
      this.updatePlayer(resp)
    })

    fromEvent<MouseEvent>(document.body, 'mousemove').subscribe(({ clientX, clientY }: MouseEvent) => {
      this.gameService.messanger.next({ clientX, clientY })
    })
  }
  updatePlayer(resp: Message) {
    const exists = this.players.get(resp.username!)
    if (exists) {
      exists.context = { $implicit: resp };
    } else {
      const view = this.container.createEmbeddedView(this.playerTpl, { $implicit: resp });
      this.players.set(resp.username!, view);
    }
  }

  register() {
    of('your name /^[a-zA-Z]{3,6}$/')
      .pipe(
        map(txt => prompt(txt)),
        switchMap(username => this.gameService.register(username as string)),
        catchError((error) => {
          console.log('register error', JSON.stringify(error));
          return throwError(error);
        }),
        retry(1)
      )
      .subscribe(this.init.bind(this))
  }

}
