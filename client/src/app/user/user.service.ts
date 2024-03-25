import { Injectable } from '@angular/core';
import { User, UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient, private router: Router) {
    try {
      const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localStorageUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login(email: string, password: string) {
    const { apiUrl } = environment;

    this.http
      .post<User>(`${apiUrl}/users/login`, { email, password })
      .subscribe((currUser) => {

        this.user = {
          username: currUser.username,
          email: currUser.email,
          password: currUser.password,
          id: currUser._id,
        };

        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
      });
  }

  register(username: string, email: string, password: string) {
    const { apiUrl } = environment;

    this.http
      .post<User>(`${apiUrl}/users/register`, { username, email, password })
      .subscribe(
        (newUser) => {
          console.log(`${newUser.username} registered successfully`);

          this.login(email, password);
          this.router.navigate(['/']);
        },

        (error) => console.log(error)
      );
  }

  signOut() {
    this.user = undefined;

    localStorage.removeItem(this.USER_KEY);
  }
}
