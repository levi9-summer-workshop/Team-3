import { Component, OnInit } from '@angular/core';
import { SurveyUser } from '../survey-user/survey-user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public user: SurveyUser;
 
  constructor() { }

  ngOnInit() {
    this.user = new SurveyUser();
  }

    public takeLoginData(form: NgForm){
     this.setSurveyUser(form.value.uss, form.value.pass);
     this.printSurveyProperties();
  }
  
  public setSurveyUser(uss:string, pass:string){
    this.user.username = uss;
    this.user.password = pass;   
  }

  public printSurveyProperties(){
    console.log("username is: " + this.user.username);
    console.log("password is: "  + this.user.password);
  }
}