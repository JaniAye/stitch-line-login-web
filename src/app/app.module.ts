import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginService} from "./components/login-form/login.service";

@NgModule({
  declarations: [
    AppComponent,
  routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
