import { Component, OnInit } from '@angular/core';
import { SurveyCreatePageServiceService } from '../../create-survey/survey-create-page/survey-create-page-service.service';
import { Router } from '@angular/router';
import { Survey } from '../survey';
import { LoginServiceService } from '../../templates/login/login-service.service';

@Component({
  selector: 'app-all-surveys',
  templateUrl: './all-surveys.component.html',
  styleUrls: ['./all-surveys.component.css']
})
export class AllSurveysComponent implements OnInit {

  public surveys : Survey[] = [];
  constructor(private surveyService : SurveyCreatePageServiceService, private router: Router, private loginService : LoginServiceService){}

  ngOnInit() {
   
    if(!this.loginService.isUserAuth()){
      this.router.navigate(['login']);
      return;
    }
    this.getAll();
  }
  getAll(){
    this.surveyService.get().subscribe(data =>{
      this.surveys[0] = new Survey();
      this.surveys = data;
    },
    (error) => { 
     }, 
     () =>{
     })
  }

}
