import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyCreatePageServiceService } from '../../create-survey/survey-create-page/survey-create-page-service.service';
import { Survey } from '../survey';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.css']
})
export class SurveyResultsComponent implements OnInit {

  constructor(private surveyService : SurveyCreatePageServiceService, private route: ActivatedRoute) { }

  id: number;
  private sub: any; 
  private survey : Survey;

  ngOnInit() {

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
