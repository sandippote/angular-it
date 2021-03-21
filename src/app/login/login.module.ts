import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


import { LoginComponent } from "./login.component";
import { LOGIN_ROUTE } from "./login.route";

@NgModule({
  imports: [

    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,

    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forChild([LOGIN_ROUTE]),
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
