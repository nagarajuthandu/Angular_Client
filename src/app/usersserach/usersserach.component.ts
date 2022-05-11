import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

interface User {
  username: String;
  password: String;
  mobile: Number;
}
@Component({
  selector: 'app-usersserach',
  templateUrl: './usersserach.component.html',
  styleUrls: ['./usersserach.component.css']
})
export class UsersserachComponent implements OnInit {
  users:User[]=[]
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.usersearch().subscribe(data=>{console.log(data)
    this.users=data
    });

  }

}
