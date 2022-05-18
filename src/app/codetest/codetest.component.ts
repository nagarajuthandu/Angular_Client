import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
interface Questions{
  qid : String,
	question : String,
	desc : String,
	userip : String,
	expop : String,
	hdip : String,
	hdop : String
}
interface Result
{
  output:String
}

@Component({
  selector: 'app-codetest',
  templateUrl: './codetest.component.html',
  styleUrls: ['./codetest.component.css']
})
export class CodetestComponent implements OnInit {

  result:Result[]=[]
  currentusername=""
  qn:Questions[]=[]



  constructor(private router:Router,private userserive:UserService) { }
  codingfrom=new FormGroup(
    {
      language:new FormControl(''),
      code:new FormControl(''),
    }
  )
  runcode()
  {
    this.userserive.coderun(this.codingfrom.value).subscribe(data => {
      this.result=data.output
    },
    error=>{
      console.log(error)
    }
    );
  }

  ngOnInit(): void {

    this.currentusername=this.userserive.currentuser
    this.userserive.getqn().subscribe(data=>{
    this.qn=data;




    })

    if(!this.currentusername)
    {
      this.router.navigate(["/login"])
    }

  }

    currentIndex = 0;
    currentItem:Questions = this.qn[this.currentIndex];
    nextItem () {
    this.currentIndex++;
    this.currentItem = this.qn[this.currentIndex];
    }
    prevItem()
    {
      this.currentIndex--;
    this.currentItem = this.qn[this.currentIndex];
    }

}
