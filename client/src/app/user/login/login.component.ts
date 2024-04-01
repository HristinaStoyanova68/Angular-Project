import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isActive: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  onLoginActive() {
    this.isActive = false;
  }

  onRegisterActive() {
    this.isActive = true;
  }

  loginFormSubmitHandler(form: NgForm | undefined) {
    const { email, password } = form?.value;

    if (form?.invalid) {
      console.log('Form is invalid!');

      return;
    }

    this.userService.login(email, password);
    
    this.router.navigate(['/']);

    form?.setValue({ email: '', password: '' });
  }

  registerFormSubmitHandler(form: NgForm | undefined) {
    const { username, registerEmail, registerPassword, rePassword } =
      form?.value;

    if (form?.invalid) {
      console.log('Form is invalid!');

      return;
    }

    if (registerPassword !== rePassword) {
      //TODO validation

      console.log('The passwords are no matching!');

      form?.setValue({
        username: '',
        registerEmail: '',
        registerPassword: '',
        rePassword: '',
      });

      return;
    }

    console.log(form?.value);

    this.userService.register(username, registerEmail, registerPassword);

    form?.setValue({
      username: '',
      registerEmail: '',
      registerPassword: '',
      rePassword: '',
    });
  }
}
