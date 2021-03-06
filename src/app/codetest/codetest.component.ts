import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
interface Questions{
  _id : String,
	question : String,
	desc : String,
	userip : String,
	expop : String,
	hdip : String,
	hdop : String,
  code:String
}
class Result
{
  username:String="";
  qid:String="";
  question:String="";
  language:String="";
  code:String="";
  input:String="";
  output:String="";
  score:Number=0;
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
  code:String=""
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
  score:Number=0;
  language:String="";

  results:Result=new Result()










  constructor(private router:Router,private userserive:UserService) { }
  codingfrom=new FormGroup(
    {
      language:new FormControl('',[Validators.required]),
      code:new FormControl('',[Validators.required]),
      userip:new FormControl('',[Validators.required]),
      expop:new FormControl('',[Validators.required]),
      hdip:new FormControl('',[Validators.required]),
      hdop:new FormControl('',[Validators.required])
    }
  )
  runcode()
  {
    if(!this.question)
    {
      alert("Please start test")
    }
    this.code=this.codingfrom.controls["code"].value;
    this.language=this.codingfrom.controls["language"].value;

    this.codingfrom.patchValue({userip:this.userip});
    this.codingfrom.patchValue({expop:this.expop});
    this.codingfrom.patchValue({hdip:this.hdip});
    this.codingfrom.patchValue({hdop:this.hdop});


    this.userserive.coderun(this.codingfrom.value).subscribe(data =>{

    this.result=data.result
    this.testcase1=data.testcase
    if(this.testcase1==="PASS"){this.score=2;}
    })

    this.codingfrom.patchValue({userip:this.hdip});
    this.codingfrom.patchValue({expop:this.hdop});
    this.userserive.coderun(this.codingfrom.value).subscribe(data =>{

      this.testcase2=data.testcase;
      if(this.testcase2==="PASS"){this.score=5;}

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

    this.testcase1=""
    this.testcase2=""
    this.result=""
    this.score=0
    }
    prevItem()
    {
    this.currentIndex--;
    this.getQn();
    this.testcase1=""
    this.testcase2=""
    this.result=""
    this.score=0
    }
    getQn()
    {
      this.qid=this.questions[this.currentIndex]._id;
    this.question=this.questions[this.currentIndex].question;
    this.desc=this.questions[this.currentIndex].desc;
    this.userip=this.questions[this.currentIndex].userip;
    this.expop=this.questions[this.currentIndex].expop;
    this.hdip=this.questions[this.currentIndex].hdip;
    this.hdop=this.questions[this.currentIndex].hdop;


    }
    save()
    {
      if(this.testcase1==="PASS" && this.testcase2=="PASS")
    {
      // let results=JSON.stringify({username:this.currentusername,qid:this.qid,score:this.score,output:this.result});
      this.results.username=this.currentusername
      this.results.qid=this.qid
      this.results.question=this.question
      this.results.language=this.language
      this.results.code=this.code
      this.results.input=this.userip
      this.results.output=this.result
      this.results.score=this.score




      console.log(this.results)
      this.userserive.save(this.results).subscribe(data=>{console.log(data)})
      alert("Results saved successfully")
    }
    else
    {
      alert("Please compile and run before save")
    }
    }
    reset()
    {
      this.codingfrom.reset()
    }

}
