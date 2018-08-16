import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _intjector: Injector) { }

  intercept(req, next) {
    const authService = this._intjector.get(AuthService);

    const tokenizedReuest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
        observe: 'body',
        withCredentials: true,
        headers: new HttpHeaders().append('Content-Type', 'application/json')
      }
    });
    return next.handle(tokenizedReuest);
  }
}
