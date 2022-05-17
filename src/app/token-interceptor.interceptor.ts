import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(public userservice:UserService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        authorization:JSON.stringify(localStorage.getItem("currentUser"))
      }
    });
    return next.handle(request);
  }
}
