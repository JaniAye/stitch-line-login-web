import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "./login";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serviceURL="http://localhost:8080/user?password=";


  constructor(private http:HttpClient) { }

 getUser(user:Login) : Observable<any>{

    return this.http.get(this.serviceURL+user.password+"&userName="+user.userName);

 }


}
