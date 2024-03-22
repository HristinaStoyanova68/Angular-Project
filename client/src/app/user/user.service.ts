import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    user: UserForAuth | undefined;
    USER_KEY = '[user]';

    get isLogged(): boolean {
        return !!this.user;
    }
    
  constructor() {
    try {
        const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
        this.user = JSON.parse(localStorageUser)
    } catch (error) {
        this.user = undefined;
    }
   }

   login() {
    this.user = {
        firstName: 'petko',
        email: 'petkopetkov@abv.bg',
        phoneNumber: '123-123-123-123',
        password: '123123',
        id: '5fa64ca72183ce1728ff3726',
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout() {
    this.user = undefined;

    localStorage.removeItem(this.USER_KEY);
  }
}
