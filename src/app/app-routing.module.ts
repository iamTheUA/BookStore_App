import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';
import { SigninComponent } from './components/user/signin/signin.component';
import { LoginComponent } from './components/user/login-component/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SigninComponent},
  {path:"reset-password", component:ResetPasswordComponent},
  {path:"book-details", component:BookDetailsComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, SigninComponent ,ResetPasswordComponent, BookDetailsComponent]