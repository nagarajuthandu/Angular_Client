import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
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
      console.log(data)
      this.result=data.output
    },
    error=>{
      console.log(error)
      alert("please login")
    }
    );
  }

  ngOnInit(): void {

    this.currentusername=this.userserive.currentuser
    this.userserive.currentuser=""
    if(!this.currentusername)
    {
      this.router.navigate(["/login"])
    }

  }

}
