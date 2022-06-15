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
    this.teacherservice.getqns().subscribe(data=>{
      this.questions=data;
      console.log(this.questions)
      })
  }


  update(_qid:String,question:String,desc:String,userip:String,expop:String,hdip:String,hdop:String)
  {
    this.router.navigate(['/TeacherUpdateqn/'], { queryParams: { qid: _qid,question:question,desc:desc,userip:userip,expop:expop,hdip:hdip,hdop:hdop}});
  }
  delete(_qid:String)
  {

    this.teacherservice.delete(_qid).subscribe(data=>{
      console.log(data)
      this.router.navigate(["/Teacherviewqn"])
    })


  }



}
