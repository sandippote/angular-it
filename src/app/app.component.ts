import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { LoginService } from "./login/login.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  isLoggedIn: any;
  constructor(
    private _loginService: LoginService,
    private _route: Router
  ) {}

  ngOnInit() {
    this._loginService.isLoggin$.subscribe((res) => {
      this.isLoggedIn = res;
      console.log(this.isLoggedIn);
    });
  }

  logout(): void {
    this._loginService.isLoggin$.next(false);
    this._route.navigate(['auth']);
    localStorage.clear();
  }
}
