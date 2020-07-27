import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './pages/auth/auth-page.component';
import { DashboardPageComponent } from './root/dashboard-page.component';
import { LoginComponent } from './components/membership/login/login.component';
import { RegisterComponent } from './components/membership/register/register.component';

const routes: Routes = [
  {
    path: 'membership',
    component: AuthPageComponent,
    children: [
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
    component: DashboardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
