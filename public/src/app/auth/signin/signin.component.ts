import { Component, OnInit } from '@angular/core';
import { FormControl } from '../../../../node_modules/@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { InputValidators } from '../../shared/validators/inputValidators';
import { Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  signinForm: FormGroup;
  localUserData;
  token;

  alert = {
    message: '',
    class: ''
  };

  user = {
    username: '',
    password: ''
  };
  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {

    /*
        this.localUserData = localStorage.getItem('user');
        this.token = localStorage.getItem('token');

        console.log('token: ', this.token);
        console.log('user local data: ', this.localUserData); */

    this.initSigninForm();
  }

  initSigninForm() {
    this.signinForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, InputValidators.isInputEmpty]),
      'password': new FormControl(null, [Validators.required, InputValidators.isInputEmpty]),
    });
  }

  onSigninSubmit() {
    // Es6 santax for console data

    console.log('user signin data:', this.user);


    this._authService.signin(this.user)
      .subscribe((res) => {

        console.log('sigin response: ', res);


        this.alert.message = res.message;
        this.alert.class = 'alert alert-success';



        // store jwt token in local storage
        localStorage.setItem('token', res.token);

        setTimeout(() => {
          this._router.navigate(['/home/users']);
        }, 3000);

      }, (err) => {

        console.log('signin error: ', err);
        console.log('signin error message: ', err.error.message);

        this.alert.class = 'alert alert-danger';
        this.alert.message = err.error.message;

      });
  }


}
