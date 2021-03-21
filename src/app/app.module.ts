import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { SettingComponent } from "./setting/setting.component";
import { AuthGuard } from "./core/auth-guard.service";

const routes: Routes = [
  {
    path: "people",
    loadChildren: () =>
      import("./list-people/list-people.module").then(l => l.ListPeopleModule)
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then(p => p.ProfileModule)
  },
  {
    path: "setting",
    component: SettingComponent
  },
  {
    path: "auth",
    loadChildren: () => import("./login/login.module").then(l => l.LoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    redirectTo: "auth"
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,

    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [AppComponent, HelloComponent, SettingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
