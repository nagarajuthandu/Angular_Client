import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { UsersserachComponent } from './usersserach/usersserach.component';
import { CodetestComponent } from './codetest/codetest.component';


const routes: Routes = [{path:'register',component:RegisterComponent},
                        {path:'login',component:LoginComponent},
                      {path:'usersearch',component:UsersserachComponent},
                    {path:'codetest',component:CodetestComponent}
                    ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
