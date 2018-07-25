import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from '../survey-question/survey-question.model';
import { SurveyAnswer } from '../survey-answer/survey-answer.model';
import { Survey } from './survey.model';
import { SurveyCreatePageServiceService } from './survey-create-page-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-create-page',
  templateUrl: './survey-create-page.component.html',
  styleUrls: ['./survey-create-page.component.css']
})
export class SurveyCreatePageComponent implements OnInit {

  public surveyName : string;
  public desc: string;
  public questions : SurveyQuestion[] = [];

  constructor(private service : SurveyCreatePageServiceService, private router : Router) { }

  ngOnInit() {
 
        let a1 : SurveyAnswer[] = [];
 
    this.questions[0] = new SurveyQuestion();
    this.questions[0].answerList = a1;
  

  }
  addQuestion(){
    this.questions.push(new SurveyQuestion());
     let  s1 : SurveyAnswer[] = [];
    this.questions[this.questions.length - 1].answerList = s1;
  }
  
  deleteEventHandler($event : any){
    this.questions.splice($event, 1);
  }
  
  submit(){
    
    if(this.surveyName == null){
      this.surveyName = "Survey default name";
    }
    if(this.desc == null){
      this.desc = "default description";
    }
  
    this.service.post(new Survey(this.surveyName, this.desc, this.questions)).subscribe(data =>{
     
    },
    (error) => { console.log(error); }, 
    () =>{
      this.router.navigate(['/home']);
    })
   
    }
}