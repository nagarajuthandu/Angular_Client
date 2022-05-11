import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private userservice:UserService) { }

  register = new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    mobile:new FormControl('')
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.register.value);

    this.userservice.registerUser(this.register.value).subscribe(data => {console.log("saved to server")})
  }

  ngOnInit(): void {


  }

}
