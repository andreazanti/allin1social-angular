import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ########### PAGES ###############
import { AuthPageComponent } from './pages/auth/auth-page.component';
import { DashboardPageComponent } from './root/dashboard-page.component';
import { HomePageComponent } from './pages/home/home-page.component';

// ############ COMPONENTS ####################
import { LoaderComponent } from './components/loader/loader.component';
import { MessageComponent } from './components/message/message.component';
import { NavComponent } from './components/nav/nav.component';
import { MembershipComponent } from './components/membership/membership.component';
import { LoginComponent } from './components/membership/login/login.component';
import { RegisterComponent } from './components/membership/register/register.component';
import { FormComponent } from './components/form/form.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './services/api/api.interceptor';

// ############ SERVICES #######################
import { LoaderService } from './components/loader/loader.service';
//TODO: study why service needs to be placed in componets or in a module (there is already the injection. Why also indicate where to inject?)
import { MembershipService } from './components/membership/membership.service';

// ############ DIRECTIVES ###################### d
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    AuthPageComponent,
    HomePageComponent,
    DashboardPageComponent,
    // Component
    LoaderComponent,
    FormComponent,
    LoginComponent,
    MessageComponent,
    NavComponent,
    MembershipComponent,
    RegisterComponent,
    HomePageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
  ],
  providers: [
    LoaderService,
    MembershipService,
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
