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

        console.log('Logged in!');

        this.userService.login();
        this.router.navigate(['/']);
    }

   
}
