import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyCreatePageServiceService } from '../../create-survey/survey-create-page/survey-create-page-service.service';
import { Survey } from '../survey';
import { LoginServiceService } from '../../templates/login/login-service.service';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.css']
})
export class SurveyResultsComponent implements OnInit {

  constructor(private surveyService : SurveyCreatePageServiceService, private router: Router , private route: ActivatedRoute , private loginService : LoginServiceService) { }

  id: number;
  private sub: any; 
  private survey : Survey;

  ngOnInit() {

    if(!this.loginService.isUserAuth()){
      this.router.navigate(['login']);
      return;
    }
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       this.survey = new Survey();    
       this.getOne(this.id);
    });
  } 

 getOne(id : number){

    this.surveyService.getById(id).subscribe(data =>{
          this.survey = data;
    },
    (error) => { 
      console.log(error); 
    })
    }
  
  calculatePercentage(answ : number, surv : number){
    return  parseFloat((answ/surv).toFixed(2)) * 100;
  }
}
