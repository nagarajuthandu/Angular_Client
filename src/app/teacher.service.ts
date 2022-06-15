import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
interface User {
  username: String;
  password: String;
  mobile: Number;
}
interface Questions {

  qid : String;
	question : String;
	desc : String;
	userip : String;
	expop : String;
	hdip : String;
	hdop : String
    }

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiURL="https://rajcodeapi.herokuapp.com";
  // apiURL="http://localhost"
  currentuser="";

  constructor(private http:HttpClient) { }
  public registerUser(data:User)
   {
    return  this.http.post(this.apiURL+"/teacher/register",data);
   }
   public loginuser(data:User):Observable<any>
   {
    return  this.http.post(this.apiURL+"/teacher/login",data);
   }
   public addQn(data:Questions):Observable<any>
   {
    return  this.http.post(this.apiURL+"/teacher/addqn",data);
   }
   public getqns():Observable<any>
   {
    let header = new HttpHeaders().set(
      "authorization",
      JSON.stringify(localStorage.getItem("currentUser"))
    );

    return this.http.get(this.apiURL+"/teacher/getqns",{'headers':header})
   }
   public getqn(qid:String):Observable<any>
   {
    let header = new HttpHeaders().set(
      "authorization",
      JSON.stringify(localStorage.getItem("currentUser"))
    );

    return this.http.get(this.apiURL+"/teacher/getqn/"+qid,{'headers':header})
   }
   public delete(_id:String):Observable<any>
   {
    let header = new HttpHeaders().set(
      "authorization",
      JSON.stringify(localStorage.getItem("currentUser"))
    );

    return this.http.delete(this.apiURL+"/teacher/deleteqn/"+_id,{'headers':header})
   }
   public updateqn(_id:String,data:Questions):Observable<any>
   {
    let header = new HttpHeaders().set(
      "authorization",
      JSON.stringify(localStorage.getItem("currentUser"))
    );

    return this.http.put(this.apiURL+"/teacher/updateqn/"+_id,data)
   }
   public getresults():Observable<any>
   {
    let header = new HttpHeaders().set(
      "authorization",
      JSON.stringify(localStorage.getItem("currentUser"))
    );

    return this.http.get(this.apiURL+"/teacher/getresults",{'headers':header})
   }


}
