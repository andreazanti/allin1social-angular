import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './pages/auth/auth-page.component';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { LoginComponent } from './components/membership/login/login.component';
import { RegisterComponent } from './components/membership/register/register.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { LoggedInUser } from './guards/LoggedInUser';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'membership',
    component: AuthPageComponent,
    children: [
      // Set the default route
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [LoggedInUser],
    component: DashboardPageComponent,
  },
  //TODO: define wildcard aka page not found ( this routes matches all the url if there wasn'nt previously match)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
