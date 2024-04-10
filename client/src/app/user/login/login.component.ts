import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoginActive: boolean = true;

  constructor(private userService: UserService) {}

  toggleMode() {
    this.isLoginActive = !this.isLoginActive;
  }

  loginFormSubmitHandler(form: NgForm | undefined) {
    if (this.isLoginActive) {
      const { email, password } = form?.value;

      if (form?.invalid) {
        console.log('Form is invalid!');

        return;
      }

      this.userService.login(email, password);

      form?.reset();
    }
  }

  registerFormSubmitHandler(form: NgForm | undefined) {
    if (!this.isLoginActive) {
      const { username, registerEmail, registerPassword, rePassword } =
        form?.value;

      if (form?.invalid) {
        console.log('Form is invalid!');

        return;
      }

      if (registerPassword !== rePassword) {
        //TODO validation

        console.log('The passwords are not matching!');

        form?.controls['registerPassword'].reset();
        form?.controls['rePassword'].reset();

        return;
      }

      this.userService.register(username, registerEmail, registerPassword);

      form?.reset();
    }
  }
}
