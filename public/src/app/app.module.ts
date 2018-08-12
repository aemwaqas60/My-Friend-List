import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { routingComponents, AppRoutingModule } from './app-routing.modules';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeheaderComponent } from './welcome/welcomeheader/welcomeheader.component';
import { AuthService } from './shared/services/auth.service';
import { UsersListComponent } from './dashboard/home/users-list/users-list.component';
import { UserService } from './shared/services/user.service';
import { FriendListComponent } from './dashboard/home/friend-list/friend-list.component';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { UserDetailsComponent } from './dashboard/home/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    routingComponents,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    WelcomeComponent,
    WelcomeheaderComponent,
    UsersListComponent,
    FriendListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, UserService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
