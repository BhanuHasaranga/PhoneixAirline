import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StaffSignupComponent } from './staff-signup/staff-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  { path : '', component : LoginComponent},
  { path : 'UserSignup', component : UserSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
