import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurveyUser } from '../survey-user/survey-user.model';
import { SurveyUserService } from '../survey-user/survey-user.service';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: SurveyUser;
  public errorMessage : string;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.user = new SurveyUser();
  }

  public takeSignUpData(form: NgForm) {
 
    console.log(form.value.username);
    console.log(form.value.email);
    console.log( form.value.password);

    this.insertNewUser(form.value.username, form.value.email, form.value.password);
      this.registrationService.post(this.user).subscribe(data => {
      this.user = data;
    },
    (error) => { 
      this.errorMessage = error;
      console.log("ASDASDASDASDASDASD");
    },
    () => {
      console.log("User registered!");
    });
  }

  public insertNewUser(username:string, email:string, password:string) {
    this.user.username = username;
    this.user.email = email;
    this.user.password = password;
  }
}
