import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    isActive: boolean = false;
    

    onLoginActive() {
        this.isActive = false;
    }

    onRegisterActive() {
        this.isActive = true;
    }

    onLoginClick() {
        console.log('Logged in!');
    }
}
