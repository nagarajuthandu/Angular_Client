import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface User {
  username: String;
  password: String;
  mobile: Number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public registerUser(data:User)
   {
    return  this.http.post("http://localhost/user/register",data);
   }
   public loginuser(data:User){
    return  this.http.post("http://localhost/user/login",data);
   }
   public usersearch(): Observable<any>
   {
     return this.http.get("http://localhost/user/users")
   }

}
