import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = environment.BASE_URL;

  constructor(private _http: HttpClient) { }

  signin(user) {
    return this._http.post<any>(this.BASE_URL + '/auth/signin', user);
  }

  signup(user) {

    return this._http.post<any>(this.BASE_URL + '/auth/signup', user);
  }
  checkUserName(user_name) {
    return this._http.post<any>(this.BASE_URL + '/auth/checkUsername', user_name);
  }
  checkEmail(user_name) {
    return this._http.post<any>(this.BASE_URL + '/auth/checkEmail', user_name);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
