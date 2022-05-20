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
  apiURL="http://localhost";
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
}
