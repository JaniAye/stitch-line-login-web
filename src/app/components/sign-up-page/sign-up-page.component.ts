import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
