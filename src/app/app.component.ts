import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'client';
  constructor(private router: Router,private userservice:UserService){

  }
  Logout()
  {
    this.userservice.logout()
    this.router.navigate(['/login'])
  }

}
