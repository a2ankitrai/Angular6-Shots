import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CommonModule } from '@angular/common';
import { SocialLoginSuccessComponent } from './social-login-success/social-login-success.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', },
  { path: 'login', component: LoginComponent },
  { path: 'social-login-success', component: SocialLoginSuccessComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    SocialLoginSuccessComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,
      // { enableTracing: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
