import { LoginComponent } from './components/user/login-component/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/user/forget-password-component/forget-password.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"forget-password", component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent]