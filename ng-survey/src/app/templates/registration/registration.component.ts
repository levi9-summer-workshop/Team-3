import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurveyUser } from '../../survey-user/survey-user.model';
import { SurveyUserService } from '../../survey-user/survey-user.service';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: SurveyUser;
  public errorMessage : string;
  public pass: string;
  public message: string;

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
    this.user = new SurveyUser();
  }

  public takeSignUpData(form: NgForm) {
      this.insertNewUser(form.value.username, form.value.email, form.value.password);
      this.registrationService.post(this.user).subscribe(data => {
      this.user = data;     
    },
    (error) => { 
      this.errorMessage = error;
      this.message = "Couldn't register, user with that username or e-mail already exists!";
    },
    () => {
      console.log("User registered!");
      this.message = "You registered succcessfully!";
      form.reset();
    });
  }

  public insertNewUser(username:string, email:string, password:string) {
    this.user.username = username;
    this.user.email = email;
    this.user.password = password;
  }

  public onOk() {
      this.router.navigate(['/home']);
  }
}