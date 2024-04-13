import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoginActive: boolean = true;
  domains = EMAIL_DOMAINS;

  constructor(private userService: UserService) {}

  toggleMode() {
    this.isLoginActive = !this.isLoginActive;
  }

  loginFormSubmitHandler(form: NgForm | undefined) {
    if (this.isLoginActive) {
      const { loginEmail, loginPassword } = form?.value;

      this.userService.login(loginEmail, loginPassword);

      form?.reset();
    }
  }

  registerFormSubmitHandler(form: NgForm | undefined) {
    if (!this.isLoginActive) {
      const { username, registerEmail, registerPassword, rePassword } =
        form?.value;

      if (registerPassword !== rePassword) {

        console.log('The passwords are not matching!');

        form?.controls['registerPassword'].reset();
        form?.controls['rePassword'].reset();

        this.userService.register(username, registerEmail, registerPassword, rePassword);

        return;
      }
      
      this.userService.register(username, registerEmail, registerPassword, rePassword);

      form?.reset();
    }
  }
}
