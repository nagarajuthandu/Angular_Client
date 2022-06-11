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


@Component({
  selector: 'app-codetest',
  templateUrl: './codetest.component.html',
  styleUrls: ['./codetest.component.css']
})
export class CodetestComponent implements OnInit {


  currentusername="";
  currentIndex = 0;
  questions:Questions[]=[];
  qid : String="";
	question : String="";
	desc : String="";
	userip : String="";
	expop : String="";
	hdip : String="";
	hdop : String="";
  result:String="";
  testcase1:String="";
  testcase2:String="";







  constructor(private router:Router,private userserive:UserService) { }
  codingfrom=new FormGroup(
    {
      language:new FormControl(''),
      code:new FormControl(''),
      userip:new FormControl(''),
      expop:new FormControl(''),
      hdip:new FormControl(''),
      hdop:new FormControl('')
    }
  )
  runcode()
  {
    this.codingfrom.patchValue({userip:this.userip});
    this.codingfrom.patchValue({expop:this.expop});
    this.codingfrom.patchValue({hdip:this.hdip});
    this.codingfrom.patchValue({hdop:this.hdop});


    this.userserive.coderun(this.codingfrom.value).subscribe(data =>{

    this.result=data.result
    this.testcase1=data.testcase
    })

    this.codingfrom.patchValue({userip:this.hdip});
    this.codingfrom.patchValue({expop:this.hdop});
    this.userserive.coderun(this.codingfrom.value).subscribe(data =>{

      this.testcase2=data.testcase
      })


  }

  ngOnInit(): void {

    this.currentusername=this.userserive.currentuser
    this.userserive.getqn().subscribe(data=>{
    this.questions=data;

    })

    if(!this.currentusername)
    {
      this.router.navigate(["/login"])
    }

  }


    nextItem () {
    this.currentIndex++;
    this.getQn();
    }
    prevItem()
    {
    this.currentIndex--;
    this.getQn();
    }
    getQn()
    {

    this.question=this.questions[this.currentIndex].question;
    this.desc=this.questions[this.currentIndex].desc;
    this.userip=this.questions[this.currentIndex].userip;
    this.expop=this.questions[this.currentIndex].expop;
    this.hdip=this.questions[this.currentIndex].hdip;
    this.hdop=this.questions[this.currentIndex].hdop;


    }

}
