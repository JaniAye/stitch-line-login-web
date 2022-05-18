import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../login-form/login";
import {Observable} from "rxjs";
import {Account} from "./account";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private serviceURL="http://localhost:8080/user/createUser";

  constructor(private http:HttpClient) { }


  addUser(signIn:Account) : Observable<object>{
    console.log(this.serviceURL,signIn)
    return this.http.post(this.serviceURL,signIn)

  }

}
