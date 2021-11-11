import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/user/login-component/login-component.component';
import { RegisterComponentComponent } from './components/user/register-component/register-component.component';
import { ForgetPasswordComponentComponent } from './components/user/forget-password-component/forget-password-component.component';
import { ResetPasswordComponentComponent } from './components/user/reset-password-component/reset-password-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    ForgetPasswordComponentComponent,
    ResetPasswordComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
