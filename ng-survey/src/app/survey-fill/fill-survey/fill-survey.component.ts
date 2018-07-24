import { Component, OnInit } from '@angular/core';
import { Survey } from './survey';
import { Question } from '../fill-question/question';
import { Answer } from '../fill-answer/answer';
import { SurveyCreatePageServiceService } from '../../create-survey/survey-create-page/survey-create-page-service.service';
import { Router } from '../../../../node_modules/@angular/router';



@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css']
})
export class FillSurveyComponent implements OnInit {

  public survey: Survey;
  
  constructor(private surveyService : SurveyCreatePageServiceService, private router : Router) { }

  ngOnInit() {
    this.survey = new Survey();
    
        this.getOne(1);
       //this.getAll();
  } 

  getOne(id : number){

    this.surveyService.getById(id).subscribe(data =>{
          this.survey = data;
    },
    (error) => { console.log("ne radi"); }, 
    () =>{
     // this.router.navigate(['/home']);
    })
  
    }

    getAll(){
      this.surveyService.get().subscribe(data =>{
        this.survey = data;
      },
     (error) => { console.log("ne radi"); }, 
       () =>{
   // this.router.navigate(['/home']);
       })
    }
}
