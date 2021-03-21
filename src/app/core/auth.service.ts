import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private _router: Router) {}

  get isloggedIn() {
    return this.loggedIn.asObservable();
  }

  logout() {
    this.loggedIn.next(false);
    this._router.navigate(["auth"]);
  }
}
