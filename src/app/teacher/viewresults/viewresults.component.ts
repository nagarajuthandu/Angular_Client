import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/teacher.service';
interface Result
{
  username:String,
  qid:String,
  question:String,
  language:String,
  code:String,
  input:String,
  output:String,
  score:Number,
}

@Component({
  selector: 'app-viewresults',
  templateUrl: './viewresults.component.html',
  styleUrls: ['./viewresults.component.css']
})
export class ViewresultsComponent implements OnInit {
  results:Result[]=[]


  constructor(private teacherservice:TeacherService) { }

  ngOnInit(): void {
    this.teacherservice.getresults().subscribe(results=>{
      this.results=results

    })
  }

}
