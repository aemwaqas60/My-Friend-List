import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './dashboard/home/home.component';
import { UsersListComponent } from './dashboard/home/users-list/users-list.component';
import { FriendListComponent } from './dashboard/home/friend-list/friend-list.component';
import { UserDetailsComponent } from './dashboard/home/user-details/user-details.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  {
    path: 'signin', component: SigninComponent
  },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'users', component: UsersListComponent },
      { path: 'friends', component: FriendListComponent },
      { path: 'userDetails/:id', component: UserDetailsComponent }
    ]
  },
];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [SignupComponent, UserDetailsComponent, SigninComponent, FriendListComponent, WelcomeComponent,
  UsersListComponent, HomeComponent];
