import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = environment.BASE_URL;
  constructor(private _http: HttpClient) {
  }

  getUsers() {
    return this._http.get<any>(this.BASE_URL + '/users');
  }
  getUser(user_id) {

    console.log('user id inside service :', user_id);

    return this._http.get<any>(this.BASE_URL + '/users/' + user_id);
  }
  getfriendList() {
    return this._http.get<any>(this.BASE_URL + '/friends');
  }
  addNewFriend(data) {
    return this._http.post<any>(this.BASE_URL + '/users/addNewFriend', data);
  }


}
