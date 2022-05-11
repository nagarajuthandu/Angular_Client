import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usersrvice:UserService) { }

  loginform=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })


  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.loginform.value)
    this.usersrvice.loginuser(this.loginform.value).subscribe(data=>console.log(data))
  }

}
