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

  result:string="";
  result2:string=""
  currentusername="";
  qn:Questions[]=[];
  isShown: boolean = true;
  isShown1:boolean = false;
  currentIndex = 0;
  currentItem:Questions = this.qn[this.currentIndex];
  testcase:String="";



  constructor(private router:Router,private userserive:UserService) { }
  codingfrom=new FormGroup(
    {
      language:new FormControl(''),
      code:new FormControl(''),
      input:new FormControl('')
    }
  )
  runcode()
  {
    this.codingfrom.patchValue({input:this.currentItem.userip});
    this.userserive.coderun(this.codingfrom.value).subscribe(data =>{
      this.result=data.output.trim()
      this.result2=this.currentItem.expop.trim()
     if(this.result==this.result2){
       this.testcase="PASS"
     }
     else{
       this.testcase="FAIL"
     }
    } )
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


    nextItem () {
    this.currentIndex++;
    this.currentItem = this.qn[this.currentIndex];
    this.testcase="";
    this.result=""
    }
    prevItem()
    {
    this.currentIndex--;
    this.currentItem = this.qn[this.currentIndex];
    this.testcase="";
    this.result=""
    }
    getQn()
    {
    this.currentItem = this.qn[this.currentIndex];
    this.isShown = ! this.isShown;
    this.isShown1 = ! this.isShown1;
    }





}
