import { Component, OnInit } from '@angular/core';
import {Login} from "../login-form/login";
import {Account} from "./account";
import {LoginService} from "../login-form/login.service";
import {SignupService} from "./signup.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  customer: any;
  admin: any;
  name: any;
  email: any;
  contact: any;
  userName: any;
  password: any;
  address: any;
  nic: any;
  empNo: any;
  userType: any;


  signup:Account= new Account();


  constructor(private signUpService:SignupService) { }

  ngOnInit(): void {
  }

  userSignUp(){
    console.log(this.signup)
    this.signUpService.addUser(this.signup).subscribe(data => {
      alert("User Added...")
    },error => alert("Error"))
  }
}
