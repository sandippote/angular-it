import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";
import { Login } from "./login.model";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  isLoggin$: BehaviorSubject<boolean>;
  constructor(private _http: HttpClient) {
    this.isLoggin$ = new BehaviorSubject(false);
  }

  login(credentials: Login): Observable<any> {
    return this._http.post("https://reqres.in/api/login", credentials);
  }
}
