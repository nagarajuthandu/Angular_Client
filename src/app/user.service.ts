import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
interface User {
  username: String;
  password: String;
  mobile: Number;
}
interface Code {
  language: String;
  code: String;
  input: String;
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
   public loginuser(data:User):Observable<any>
   {
    return  this.http.post("http://localhost/user/login",data);
   }
   public usersearch():Observable<any>
   {
    let header = new HttpHeaders().set(
      "authorization",
      JSON.stringify(localStorage.getItem("currentUser"))
    );

    return this.http.get("http://localhost/user/users",{'headers':header})
   }
   public coderun(data:Code):Observable<any>
   {
        return this.http.post("http://localhost/user/run",data)
   }


   logout()
    {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    }

}
