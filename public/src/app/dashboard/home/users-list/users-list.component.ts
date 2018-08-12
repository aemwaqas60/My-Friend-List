import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private _userService: UserService) { }
  users;
  ngOnInit() {

    this.getUserList();
  }


  onAddNewFriend(friend_id) {
    const data = {
      friend_id: friend_id
    };
    this._userService.addNewFriend(data)
      .subscribe((res) => {
        console.log('add new friend response:', res);

      }, (err) => {

        console.log('add new friend err: ', err);
      });
  }
  getUserList() {

    this._userService.getUsers()
      .subscribe((res) => {

        this.users = res.users;
        console.log(res.users);


      }, (err) => {

        console.log('user get error: ', err);

      });

  }

}
