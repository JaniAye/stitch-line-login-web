import { Component, OnInit } from '@angular/core';
import {Login} from "./login";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  login:Login[]=[];
  user:Login= new Login();

  invalidLogin = false

  constructor(private loginService:LoginService) {
    // this.login=[];
  }

  ngOnInit(): void {
    // this.getUsers();
  }

  userLogin(){
    console.log(this.user)
    this.loginService.getUser(this.user).subscribe(data => {
      alert("login successfull")
    },error => alert("Incorrect user name or password"))
  }

}
