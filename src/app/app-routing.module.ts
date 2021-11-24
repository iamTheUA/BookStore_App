import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';
import { SigninComponent } from './components/user/signin/signin.component';
import { LoginComponent } from './components/user/login-component/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/user/header/header.component';
import { HeaderSearchComponent } from './components/user/header-search/header-search.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { BooklistComponent } from './components/book/booklist/booklist.component';
import { ForgetPasswordComponent } from './components/user/forget-password-component/forget-password.component';
import { MyordersComponent } from './components/user/myorders/myorders.component';
import { LoginRequestComponent } from './components/user/login-request/login-request.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SigninComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: "book-details", component: BookDetailsComponent },
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "headersearch", component: HeaderSearchComponent },
  { path: "book-list", component: BooklistComponent },
  { path: "myorders", component: MyordersComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "login-request", component: LoginRequestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, HeaderComponent, ResetPasswordComponent, SigninComponent,
  HeaderSearchComponent, FooterComponent, BooklistComponent, ForgetPasswordComponent, BookDetailsComponent,
  LoginRequestComponent]
