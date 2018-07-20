import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SurveyUser } from '../survey-user/survey-user.model';
import { SurveyUserService } from '../survey-user/survey-user.service';
import { RegistrationService } from './registration.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: SurveyUser;
  public errorMessage : string;
  public pass: string;

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
    this.user = new SurveyUser();
  }

  public takeSignUpData(form: NgForm) {
 
    console.log(form.value.username);
    console.log(form.value.email);
    console.log(form.value.password);

    this.insertNewUser(form.value.username, form.value.email, form.value.password);
      this.registrationService.post(this.user).subscribe(data => {
      this.user = data;
      this.router.navigate(['/home']);
    },
    (error) => { 
      this.errorMessage = error;
      window.alert("User with this username or e-mail exists!");
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
