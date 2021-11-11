import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/user/login-component/login-component.component';
import { RegisterComponentComponent } from './components/user/register-component/register-component.component';
import { ForgetPasswordComponentComponent } from './components/user/forget-password-component/forget-password-component.component';
import { ResetPasswordComponentComponent } from './components/user/reset-password-component/reset-password-component.component';
import { HeaderComponent } from './components/user/header/header.component';
import { HeaderSearchComponent } from './components/user/header-search/header-search.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    ForgetPasswordComponentComponent,
    ResetPasswordComponentComponent,
    HeaderComponent,
    HeaderSearchComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
