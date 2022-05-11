import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface User {
  username: String;
  password: String;
  mobile: Number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
 URL="http://localhost/user/register";

  constructor(private http:HttpClient) { }

  public registerUser(data:User)
   {
    return  this.http.post(this.URL,data);
   }
}
