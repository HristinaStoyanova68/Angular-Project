import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isShownChoices: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  // get username(): string {
  //   return this.userService.user?.username || '';
  // }

  toggleChoices() {
    this.isShownChoices = !this.isShownChoices;
  }

  signOut() {
    this.userService.signOut();
    this.router.navigate(['/']);
  }
}
