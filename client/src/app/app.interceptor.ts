import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const { usersApiUrl, recipesApiUrl } = environment;

@Injectable()
class AppInterceptor implements HttpInterceptor {
  API_USERS = '/users';
  API_RECIPES = '/recipes';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);

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

    return next.handle(req);
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
