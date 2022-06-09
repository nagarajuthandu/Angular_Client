import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private router:Router, private userservice:UserService) { }

  register = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required])
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.register.value);
  this.userservice.registerUser(this.register.value).subscribe(data => {
    alert("You registration is sucess");
    this.router.navigate(["/login"])

  })

}

  ngOnInit(): void {


  }

}
