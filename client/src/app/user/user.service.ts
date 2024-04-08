import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { Recipe } from '../types/recipe';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService implements OnDestroy{

  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.userSubscription = this.user$.subscribe(user => {
      this.user = user;
    });
  }

  login(email: string, password: string) {

    // this.http
    //   .post<User>(`/users/login`, { email, password })
    //   .subscribe((currUser) => {

    //     console.log(currUser);
        

    //     this.user = {
    //       username: currUser.username,
    //       email: currUser.email,
    //       password: currUser.password,
    //       id: currUser._id,
    //       accessToken: currUser.accessToken,

    //     };

    //     localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    //   });

      this.http
      .post<UserForAuth>(`/users/login`, { email, password })
      .pipe(tap(user => this.user$$.next(user))).subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  register(username: string, email: string, password: string) {

    // this.http
    //   .post<User>(`/users/register`, { username, email, password })
    //   .subscribe(
    //     (newUser) => {
    //       console.log(`${newUser.username} registered successfully`);

    //       this.login(email, password);
    //       this.router.navigate(['/']);
    //     },

    //     (error) => console.log(error)
    //   );

    this.http
    .post<UserForAuth>(`/users/register`, { username, email, password })
    .pipe(tap(user => this.user$$.next(user))).subscribe(() => {
      this.login(email, password);
    });
  }

  getMyRecipes () {

    return this.http.get<Recipe[] | []>(`/recipes/my-recipes`);
  }

  signOut() {
    // this.user = undefined;

    // localStorage.removeItem(this.USER_KEY);

    //TODO see this is .subscribe necessary

    this.http.post('/users/logout', {})
    .pipe(tap(() => this.user$$.next(undefined))).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: () => {
        this.router.navigate(['/'])
      },
      
    });
  }

  getUser() {
    return this.http.get<UserForAuth>('/users/get-user').pipe(tap(user => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
