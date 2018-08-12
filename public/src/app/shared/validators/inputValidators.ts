import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
export class InputValidators {

  password: InputValidators;
  repeatPassword: String;

  static isInputEmpty(control: FormGroup) {
    console.log('control in validator input cannot be empty: ', control);
    // console.log('first name value : ', control.controls.firstName.value);

    if (control.value && (control.value as string).trim().length === 0) {
      return { isInputEmpty: true };
    } else {
      return null;
    }

  }
  static validatePassword(passwordFormcontrol: FormGroup) {

    console.log('control in validator: ', passwordFormcontrol);
    // console.log('control in validator: ', passwordFormcontrol);


    const password = String(passwordFormcontrol.controls.password.value);
    const repeatPassword = String(passwordFormcontrol.controls.repeatPassword.value);

    console.log('Password: ', password);
    console.log('Repeat  Password: ', repeatPassword);

    /*  if (repeatPassword.length <= 0) {
       return null;
     }
  */
    if (repeatPassword !== password) {

      console.log('Inside if:');

      return {
        doesNotMatchPassword: true
      };
    } else {

      return { doesNotMatchPassword: false };
    }
  }


}
