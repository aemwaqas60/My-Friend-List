import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId;
  user;
  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserDetails();

  }

  getUserDetails() {

    this._userService.getUser(this.userId)
      .subscribe((res) => {
        this.user = res.user;

        console.log(this.user);

      }, (err) => {

        console.log(err);

      });
  }


}
