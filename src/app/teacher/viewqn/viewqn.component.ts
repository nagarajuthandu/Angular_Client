import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/teacher.service';

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
  selector: 'app-viewqn',
  templateUrl: './viewqn.component.html',
  styleUrls: ['./viewqn.component.css']
})
export class ViewqnComponent implements OnInit {
  questions:Questions[]=[];
  constructor(private router:Router,private teacherservice:TeacherService) { }

  ngOnInit(): void {
    this.teacherservice.getqn().subscribe(data=>{
      this.questions=data;
      console.log(this.questions)
      })
  }

  addQn(){
    this.router.navigate(["/TeacherAddQn"])
  }
  update(_qid:String)
  {
    console.log(_qid)
  }
  delete(_qid:String)
  {
    console.log(_qid)
    this.teacherservice.delete(_qid).subscribe(data=>{
      console.log(data)
      this.router.navigate(["/Teacherviewqn"])
    })


  }



}
