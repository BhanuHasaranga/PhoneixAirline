import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StaffSignupComponent } from './staff-signup/staff-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminDashboardUserComponent } from './admin-dashboard-user/admin-dashboard-user.component';

const routes: Routes = [
  { path : '', component : LoginComponent},
  { path : 'UserSignup', component : UserSignupComponent},
  { path : 'StaffSignup', component : StaffSignupComponent},
  { path : 'AdminDashboardUser', component : AdminDashboardUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
