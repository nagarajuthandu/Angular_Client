import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/teacher.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class TLoginComponent implements OnInit {

  constructor(private router :Router,private teacherservice:TeacherService) { }

  loginform=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })


  ngOnInit(): void {
  }

  onSubmit(){
    // console.warn(this.loginform.value)
    this.teacherservice.loginuser(this.loginform.value)
    .subscribe(user=>{console.log(user)
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("currentUser", user.token);
        this.teacherservice.currentuser=user.username
        this.router.navigate(["/TeacherAddQn"])

      }


    })
  }
}
