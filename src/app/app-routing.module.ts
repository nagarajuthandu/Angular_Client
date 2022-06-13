import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { UsersserachComponent } from './usersserach/usersserach.component';
import { CodetestComponent } from './codetest/codetest.component';
import { TLoginComponent } from './teacher/login/login.component';
import { TRegisterComponent } from './teacher/register/register.component';
import { AddqnComponent } from './teacher/addqn/addqn.component';
import { ViewqnComponent } from './teacher/viewqn/viewqn.component';
import { UpdateqnComponent } from './teacher/updateqn/updateqn.component';

const routes: Routes = [{path:'register',component:RegisterComponent},
                        {path:'login',component:LoginComponent},
                      {path:'usersearch',component:UsersserachComponent},
                    {path:'codetest',component:CodetestComponent},
                    {path:'Teacherlogin',component:TLoginComponent},
                    {path:"Teacherregister",component:TRegisterComponent},
                    {path:"TeacherAddQn",component:AddqnComponent},
                    {path:"Teacherviewqn",component:ViewqnComponent},
                    {path:"TeacherUpdateqn",component:UpdateqnComponent}

                    ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
