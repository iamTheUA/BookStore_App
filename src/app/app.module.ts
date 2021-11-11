import { ForgetPasswordComponent } from './components/user/forget-password-component/forget-password.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login-component/login.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    routingComponents,
    SigninComponent,
    ResetPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
