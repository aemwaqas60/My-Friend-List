import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _intjector: Injector) { }

  intercept(req, next) {
    const authService = this._intjector.get(AuthService);

    const tokenizedReuest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReuest);
  }
}
