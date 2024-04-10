import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';

const { usersApiUrl, recipesApiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  API_USERS = '/users';
  API_RECIPES = '/recipes';

  constructor(private errorService: ErrorService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      req.url.startsWith(this.API_USERS) ||
      req.url.startsWith(this.API_RECIPES)
    ) {
      req = req.clone({
        url: req.url.startsWith(this.API_USERS)
          ? req.url.replace(this.API_USERS, usersApiUrl)
          : req.url.replace(this.API_RECIPES, recipesApiUrl),
        withCredentials: true,
      });
    }

    return next.handle(req).pipe(
      catchError((err) => {
        this.errorService.setError(err);

        if (err.status === 401) {
          this.router.navigate(['/auth/login']);
        }

        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
