import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authInterceptor=request.clone({
      setHeaders:{Authorization:`Bearer ${localStorage.getItem('token')}`}
    })
    return next.handle(authInterceptor);
  }
}

export const UserInterCeptorProvider=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:UserInterceptor,
    multi:true
  }
]
