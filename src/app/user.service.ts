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
interface Result
{
  username:String,
  qid:String,
  question:String,
  language:String,
  code:String,
  input:String,
  output:String,
  score:Number,
}



@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL="https://rajcodeapi.herokuapp.com";
  // apiURL="http://localhost"
  currentuser="";
  constructor(private http:HttpClient) { }

  public registerUser(data:User)
   {
    return  this.http.post(this.apiURL+"/user/register",data);
   }
   public loginuser(data:User):Observable<any>
   {
    return  this.http.post(this.apiURL+"/user/login",data);
   }
   public usersearch():Observable<any>
   {
    let header = new HttpHeaders().set(
      "authorization",
      JSON.stringify(localStorage.getItem("currentUser"))
    );

    return this.http.get(this.apiURL+"/user/users",{'headers':header})
   }
   public getqn():Observable<any>
   {
    let header = new HttpHeaders().set(
      "authorization",
      JSON.stringify(localStorage.getItem("currentUser"))
    );

    return this.http.get(this.apiURL+"/user/getqn",{'headers':header})
   }
   public coderun(data:Code):Observable<any>
   {
        return this.http.post(this.apiURL+"/user/run",data)
   }
   public save(data:Result):Observable<any>
   {
    console.log(data)
    return this.http.post(this.apiURL+"/user/save",data)
   }

   logout()
    {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    }

}
