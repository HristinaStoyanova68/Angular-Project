import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({ providedIn: 'root' })
export class OwnerActivate implements CanActivate {
  constructor(private apiService: ApiService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    
      const collectionName = route.paramMap.get('collectionName')!;
      const recipeId = route.paramMap.get('recipeId')!;

      return this.apiService.chechIsOwner(collectionName, recipeId).pipe(
        tap(isOwner => {
          if (!isOwner) {
            this.router.navigate(['/404']);
          }
        }),
        map(isOwner => isOwner || this.router.createUrlTree(['/404'])),
        catchError(() => {
          this.router.navigate(['/404']);

          return of(false);
        })
      )
  }
}
