import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';
import { InputValidators } from '../../shared/validators/inputValidators';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  passwordFormGroup: FormGroup;

  user = {
    email: '',
    username: '',
    password: ''
  };

  checkUserName = {
    status: '',
    message: ''
  };
  checkEmail = {
    status: '',
    message: ''
  };

  alert = {
    class: '',
    message: ''
  };


  constructor(private _authService: AuthService, private formBuilder: FormBuilder, private _router: Router) { }
  ngOnInit() {

    this.initializeSignupForm();
  }


  initializeSignupForm() {
    // Reactive forms validation
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, InputValidators.isInputEmpty]],
      email: ['', [Validators.required, Validators.email]],
      passwordFormGroup: this.passwordFormGroup
    },
    );
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', [Validators.required, InputValidators.isInputEmpty]],
      repeatPassword: ['', [Validators.required, InputValidators.isInputEmpty]]
    }, {
        validator: InputValidators.validatePassword.bind(this)
      });
  }
  onSignupFormSubmit() {
    // console.log(this.user);

    console.log(this.signupForm);

    this._authService.signup(this.user)
      .subscribe((res) => {

        this.alert.class = 'alert alert-success';
        this.alert.message = res['message'];

        console.log('Reponse: ', res);

        setTimeout(() => {
          this._router.navigate(['/signin']);
        }, 3000);

      }, (err) => {
        console.log('Sigup Error: ', err);

        this.alert.class = 'alert alert-danger';
        this.alert.message = err.error['message'];

      });
  }
  // checking either username is available or not
  onCheckUserName(event) {

    const data = {
      username: event.target.value
    };


    this._authService.checkUserName(data)
      .subscribe((res) => {

        console.log('Reponse: ', res);

        this.checkUserName = res;

      }, (err) => {

        console.log('user name check err: ', err);

      });
  }
  onCheckEmail(event) {

    console.log(event.target.value);

    const data = {
      email: event.target.value
    };

    this._authService.checkEmail(data)
      .subscribe((res) => {

        console.log('Reponse: ', res);

        this.checkEmail = res;

      }, (err) => {

        console.log('user email check err: ', err);

      });
  }

}
