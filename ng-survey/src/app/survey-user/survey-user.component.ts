import { Component, OnInit } from '@angular/core';
import { SurveyUserService } from './survey-user.service';
import { LoginServiceService } from '../templates/login/login-service.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-survey-user',
  templateUrl: './survey-user.component.html',
  styleUrls: ['./survey-user.component.css']
})
export class SurveyUserComponent implements OnInit {

  constructor( private loginService : LoginServiceService, private router : Router) { }
  
  ngOnInit() {
    
    if(!this.loginService.isUserAuth()){
      this.router.navigate(['login']);
      return;
    }
  }
}