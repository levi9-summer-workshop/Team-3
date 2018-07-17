import { Component, OnInit } from '@angular/core';
import { SurveyUser } from '../model/survey-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: SurveyUser;
  constructor() { }

  ngOnInit() {

  }
  public takeLoginData(){

  }
}
