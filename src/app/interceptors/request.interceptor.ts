import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  
  apiKey = environment.apiKey;

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpHandler>> {
    const req$ = req.clone({
      headers: req.headers
        .set('Content-Type', 'application/json')
        .set(
          'Authorization_APP',
          this.apiKey
        )
    });
    return next.handle(req$);
  }
}
