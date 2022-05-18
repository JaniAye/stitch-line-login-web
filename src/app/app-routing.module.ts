import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {SignUpPageComponent} from "./components/sign-up-page/sign-up-page.component";

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full' },
  {path:'login', component:LoginFormComponent},
  {path:'signup', component:SignUpPageComponent},
  {path:'home', component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginFormComponent,SignUpPageComponent,HomePageComponent]
