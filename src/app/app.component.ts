import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  constructor() {}

  ngOnInit() {
    console.log(localStorage.getItem("token"));
  }
}
