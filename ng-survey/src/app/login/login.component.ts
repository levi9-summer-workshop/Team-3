import { Component, OnInit } from '@angular/core';
import { SurveyUser } from '../survey-user/survey-user.model';
import { NgForm } from '@angular/forms';
import { SurveyUserService } from '../survey-user/survey-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: SurveyUser;
  public loggedUser : SurveyUser;
  constructor(private surveyService: SurveyUserService) { }

  ngOnInit() {
    this.user = new SurveyUser();
    }

    public takeLoginData(form: NgForm){

     this.setSurveyUser(form.value.username, form.value.password); 
     this.surveyService.post(this.user).subscribe(data => { 
      this.loggedUser = data; 
    },
    (error) => { 
      console.log(error);
    },
    () => {
        console.log("IT'S COMPLETE!");
    });
  }
  
  public setSurveyUser(uss:string, pass:string){
    this.user.username = uss;
    this.user.password = pass;   
  }
}