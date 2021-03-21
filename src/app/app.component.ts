import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AuthService } from "./core/auth.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit{
  name = "Angular";

  isLogged$: Observable<boolean>;
  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.isLogged$ = this.authService.loggedIn;
  }
}
