import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/teacher.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class TRegisterComponent implements OnInit {

  constructor(private router:Router,private teacherservice:TeacherService) { }
  register = new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    mobile:new FormControl('')
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.register.value);
  this.teacherservice.registerUser(this.register.value).subscribe(data => {
    alert("You registration is sucess");
    this.router.navigate(["/Teacherlogin"])

  })

}

  ngOnInit(): void {
  }

}
