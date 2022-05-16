import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';
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
  constructor(private userserive:UserService) { }
  codingfrom=new FormGroup(
    {
      language:new FormControl(''),
      code:new FormControl('')
    }
  )
  runcode()
  {
    this.userserive.coderun(this.codingfrom.value).subscribe(data => {
      console.log(data)
      this.result=data.output

    });
  }

  ngOnInit(): void {
  }

}
