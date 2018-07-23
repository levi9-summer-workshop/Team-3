import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from '../survey-question/survey-question.model';
import { SurveyAnswer } from '../survey-answer/survey-answer.model';

@Component({
  selector: 'app-survey-create-page',
  templateUrl: './survey-create-page.component.html',
  styleUrls: ['./survey-create-page.component.css']
})
export class SurveyCreatePageComponent implements OnInit {

  public surveyName : string;

  public questions : SurveyQuestion[] = [];

  constructor() { }

  ngOnInit() {
    this.surveyName = "My first survey!";
    
    let a1 : SurveyAnswer[] = [];
    a1.push(new SurveyAnswer("Before 7 am?"));
    a1.push(new SurveyAnswer("After 7 am?"));
    a1.push(new SurveyAnswer("Ain't nobody got time for that"));
    this.questions[0] = new SurveyQuestion();
    this.questions[0].answerList = a1;
    this.questions[0].questionText = "When do you get up for work?";
  /*  //second question
    let a2 : SurveyAnswer[] = [];
    a2.push(new SurveyAnswer("Of course i do, I don't wanna die young"));
    a2.push(new SurveyAnswer("Sometimes i do but not all the time."));
    a2.push(new SurveyAnswer("Ain't nobody gor time for that!"));
    this.questions[1] = new SurveyQuestion();
    this.questions[1].answerList = a2;
    this.questions[1].questionText = "Do you eat healthy on your work?";
   /* //third question
    let a3 : SurveyAnswer[] = [];
    a3.push(new SurveyAnswer("No, of course i don't, that's part of my job."));
    a3.push(new SurveyAnswer("Well, it's a bit tidious but i do my best!"));
    a3.push(new SurveyAnswer("My hand hurts."));
    this.questions[2] = new SurveyQuestion();
    this.questions[2].answerList = a3;
    this.questions[2].questionText = "Do you find it boring to make these *mock* questions?" */
  }
  addQuestion(){
    this.questions.push(new SurveyQuestion());
  let  s1 : SurveyAnswer[] = [];
    this.questions[this.questions.length - 1].answerList = s1;
    console.log();
  }
  
  deleteEventHandler($event : any){
    this.questions.splice($event, 1);
  } 
}