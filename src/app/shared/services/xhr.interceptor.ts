import { NotificationService } from './notification.service';
import { LoadingStateService } from './loading.store.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor(
    private loadingState: LoadingStateService,
    private notification: NotificationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingState.setState(true);
    const reqClone = this.addToken(req, localStorage.getItem('token'));
    return next
      .handle(reqClone)
      .pipe(
        tap(evt => {
          evt instanceof HttpResponse && this.loadingState.setState(false);
        }),
        catchError(({ error: { error }, status }) => {
          switch (status) {
            default:
              this.notification.showError(error);
              this.loadingState.setState(false);
          }
          return throwError(() => error);
        })
      )
  }

  addToken(req: HttpRequest<any>, token: string | null) {
    const opt = token ? { setHeaders: { Authorization: token } } : {};
    return req.clone({ ...opt, withCredentials: true });
  }
}
