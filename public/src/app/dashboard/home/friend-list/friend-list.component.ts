import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor(private _userService: UserService) { }
  friends;
  ngOnInit() {
    this.loadFriendList();
  }

  loadFriendList() {
    this._userService.getfriendList()
      .subscribe((res) => {
        this.friends = res.friends['friends'];

        console.log(this.friends);


      }, (err) => {
        console.log('error', err);


      });
  }




}
