import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { TeacherService } from './teacher.service';
import { UsersserachComponent } from './usersserach/usersserach.component';
import { CodetestComponent } from './codetest/codetest.component';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';
import { AddqnComponent } from './teacher/addqn/addqn.component';
import { TRegisterComponent } from './teacher/register/register.component';
import { TLoginComponent } from './teacher/login/login.component';
import { ViewqnComponent } from './teacher/viewqn/viewqn.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UsersserachComponent,
    CodetestComponent,
    AddqnComponent,
    TRegisterComponent,
    TLoginComponent,
    ViewqnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService,TeacherService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
