import { Component, OnInit, Input } from '@angular/core';
import { SurveyQuestion } from './survey-question.model';
import { SurveyAnswer } from '../survey-answer/survey-answer.model';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent implements OnInit {

@Input('questionList')  public question: SurveyQuestion;

  constructor() { }

  ngOnInit() {
  }

  addAnswer(){
      this.question.answerList.push(new SurveyAnswer("default text"));
  }
}