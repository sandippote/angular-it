import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";
import { take } from "rxjs/internal/operators/take";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private _route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.loggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this._route.navigate(["auth"]);
          return false;
        }
        return true;
      })
    );
  }
}
