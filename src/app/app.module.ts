import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StaffSignupComponent } from './staff-signup/staff-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminDashboardUserComponent } from './admin-dashboard-user/admin-dashboard-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StaffSignupComponent,
    UserSignupComponent,
    AdminDashboardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
