import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TeacherService } from 'src/app/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addqn',
  templateUrl: './addqn.component.html',
  styleUrls: ['./addqn.component.css']
})
export class AddqnComponent implements OnInit {
    addqn = new FormGroup({
    question : new FormControl(''),
    desc : new FormControl(''),
    userip : new FormControl(''),
    expop : new FormControl(''),
    hdip : new FormControl(''),
    hdop : new FormControl(''),

  });
  constructor(private router:Router,private teacherservice:TeacherService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {

    this.teacherservice.addQn(this.addqn.value).subscribe(data => {
      alert("Qutions added sucess fully");
      this.addqn.reset()
      this.router.navigate(["/TeacherAddQn"])
  });
}
}
