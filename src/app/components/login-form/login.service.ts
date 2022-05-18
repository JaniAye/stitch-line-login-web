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

 getUser(user:Login) : Observable<object>{

    return this.http.get(this.serviceURL+user.password+"&userName="+user.userName);

 }

  authenticate(username:string, password:string) {
    if (username === "javainuse" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
