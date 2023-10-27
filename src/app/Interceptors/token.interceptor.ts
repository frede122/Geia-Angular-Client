import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestUrl: Array<string> = request.url.split('/');
    const apiUrl: Array<string> = environment.apiUrl.split('/');
    const token = localStorage.getItem('token');

    if(token && (requestUrl[2] == apiUrl[2])){
        const newRequest = request.clone({ setHeaders: { 'Authorization' : `Bearer ${token}`} });
        return next.handle(newRequest);
    }else{
        return next.handle(request);
    }
  }
}
