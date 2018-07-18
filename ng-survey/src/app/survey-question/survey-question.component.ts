import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from './survey-question.model';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent implements OnInit {
 public question: SurveyQuestion;
  constructor() { }

  ngOnInit() {
  }

}