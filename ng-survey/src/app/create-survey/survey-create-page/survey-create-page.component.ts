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
    a1.push(new SurveyAnswer("Before 7 am?"));
    a1.push(new SurveyAnswer("After 7 am?"));
    a1.push(new SurveyAnswer("Ain't nobody got time for that"));
    this.questions[0] = new SurveyQuestion();
    this.questions[0].answerList = a1;
    this.questions[0].questionText = "When do you get up for work?";

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
    let surv = new Survey(this.surveyName, this.desc, this.questions);
    //console.log(JSON.stringify(surv));
    this.service.post(surv).subscribe(data =>{
    },
    (error) => {}, 
    () =>{
      this.router.navigate(['/home']);
    })
   
    }
}