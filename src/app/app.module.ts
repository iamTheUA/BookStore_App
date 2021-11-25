import { AuthIntercaptor } from './services/auth.interceptor';
import { UserService } from './services/user/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/user/forget-password-component/forget-password.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './components/user/header/header.component';
import { HeaderSearchComponent } from './components/user/header-search/header-search.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login-component/login.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { ResetPasswordComponent } from './components/user/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { BooklistComponent } from './components/book/booklist/booklist.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginRequestComponent } from './components/user/login-request/login-request.component';
import { MatRadioModule } from '@angular/material/radio';
import { OrderGreetingComponent } from './components/book/order-greeting/order-greeting.component';
import { WishlistComponent } from './components/book/wishlist/wishlist.component';
import { PersonalDetailsComponent } from './components/user/personal-details/personal-details.component';
import { CartComponent } from './components/book/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaceOrderRequestComponent } from './components/book/place-order-request/place-order-request.component';
import { CustomerOrderSummaryComponent } from './components/book/customer-order-summary/customer-order-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSearchComponent,
    LoginComponent,
    ForgetPasswordComponent,
    routingComponents,
    SigninComponent,
    ResetPasswordComponent,
    FooterComponent,
    BooklistComponent,
    OrderGreetingComponent,
    WishlistComponent,
    PersonalDetailsComponent,
    CartComponent,
    PlaceOrderRequestComponent,
    CustomerOrderSummaryComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
