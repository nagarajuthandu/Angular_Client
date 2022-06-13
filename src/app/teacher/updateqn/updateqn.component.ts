import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TeacherService } from 'src/app/teacher.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Questions{
  _id : String,
	question : String,
	desc : String,
	userip : String,
	expop : String,
	hdip : String,
	hdop : String
}



@Component({
  selector: 'app-updateqn',
  templateUrl: './updateqn.component.html',
  styleUrls: ['./updateqn.component.css']
})
export class UpdateqnComponent implements OnInit {
  updateqid:String="";
  questions:Questions[]=[];
  currentIndex = 0;
  question : String="";
	desc : String="";
	userip : String="";
	expop : String="";
	hdip : String="";
	hdop : String="";
  addqn = new FormGroup({
    question : new FormControl('',Validators.required),
    desc : new FormControl('',Validators.required),
    userip : new FormControl('',Validators.required),
    expop : new FormControl('',Validators.required),
    hdip : new FormControl('',Validators.required),
    hdop : new FormControl('',Validators.required),

  });

  constructor(private router:Router, private route: ActivatedRoute,private teacherservice:TeacherService ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.updateqid = params['qid'];
      this.question = params['question'];
      this.desc=params['desc'];
      this.userip=params['userip'];
      this.expop=params['expop'];
      this.hdip=params['hdip'];
      this.hdop=params['hdop'];

     });


  }

  onSubmit()
  {
    this.teacherservice.updateqn(this.updateqid,this.addqn.value).subscribe(data => {
      alert("Qutions updated sucess fully");
      this.addqn.reset()
      this.router.navigate(["/Teacherviewqn"])
    })

  }
}
