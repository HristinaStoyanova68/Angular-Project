import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    isActive: boolean = false;
    

    onLoginAction() {
        this.isActive = false;
    }

    onRegisterAction() {
        this.isActive = true;
    }

    onLoginClick() {
        console.log('Logged in!');
    }
}
