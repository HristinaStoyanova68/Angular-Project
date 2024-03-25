import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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

    onLoginClick(event: Event, email: string, password: string) {
        event.preventDefault();

        this.userService.login(email, password);
        this.router.navigate(['/']);
    }

    onRegisterClick(event: Event, username: string, email: string, password: string) {
        event.preventDefault();

        this.userService.register(username, email, password);
    }
}
