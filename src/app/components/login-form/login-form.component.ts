import { Component, OnInit } from '@angular/core';
import {Login} from "./login";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user:Login= new Login();

  invalidLogin = false

  constructor(private loginService:LoginService, private router: Router) {
    // this.login=[];
  }

  ngOnInit(): void {
    // this.getUsers();
  }

  userLogin(){
    console.log(this.user)
    this.loginService.getUser(this.user).subscribe(data => {

      if (data.userType=="Customer"){
        this.router.navigate(['/home']);
      }else {
        this.router.navigate(['/admin']);
      }


    },error => alert("Incorrect user name or password"))
  }

}
