import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Survey } from './survey';
import { SurveyCreatePageServiceService } from '../../create-survey/survey-create-page/survey-create-page-service.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css']
})
export class FillSurveyComponent implements OnInit, OnDestroy  {

  public survey: Survey;

  id: number;
  private sub: any;
  
  constructor(private surveyService : SurveyCreatePageServiceService, private route: ActivatedRoute) { }

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
      console.log("ne radi"); 
    })
    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }

      submit(){
        console.log(JSON.stringify(this.survey));
      }
      
}