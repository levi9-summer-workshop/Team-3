import { Component, OnInit } from '@angular/core';
import { SurveyUser } from '../survey-user/survey-user.model';
import { NgForm } from '@angular/forms';
import { SurveyUserService } from '../survey-user/survey-user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: SurveyUser;
  public loggedUser : SurveyUser;
  public errorMessage : string;
  public message : string;

  constructor(private surveyService: SurveyUserService, private router: Router) { }

  ngOnInit() {
    this.user = new SurveyUser();
    }

    public takeLoginData(form: NgForm) {
      this.setSurveyUser(form.value.username, form.value.password); 
      this.surveyService.post(this.user).subscribe(data => { 
      this.loggedUser = data; 
    },
    (error) => { 
        this.errorMessage = error;
        this.message = "Bad credentials!";
    },
    () => {
      console.log("User logged in!");
      this.message = "You logged in succcessfully!";
      form.reset();
    });
  }
  
  public setSurveyUser(uss:string, pass:string) {
    this.user.username = uss;
    this.user.password = pass;   
  }

  public onOk() {
    this.router.navigate(['/home']);
}
}