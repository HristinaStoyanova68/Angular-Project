import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

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

  toggleChoices() {
    this.isShownChoices = !this.isShownChoices;
  }

  signOut() {
    this.userService.signOut();
    this.router.navigate(['/']);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.meal-choices')) {
      this.isShownChoices = false;
    }
  }
}


