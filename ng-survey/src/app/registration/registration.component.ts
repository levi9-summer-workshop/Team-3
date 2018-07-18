import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { SurveyUser } from '../survey-user/survey-user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: SurveyUser;

  constructor() { }

  ngOnInit() {
  }

  public takeSignUpData(form: NgForm){

  }
}
