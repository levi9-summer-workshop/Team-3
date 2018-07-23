import { Component, OnInit, Input } from '@angular/core';
import { SurveyAnswer } from './survey-answer.model';

@Component({
  selector: 'app-survey-answer',
  templateUrl: './survey-answer.component.html',
  styleUrls: ['./survey-answer.component.css']
})
export class SurveyAnswerComponent implements OnInit {
  
  @Input('srvAnswer') public answerObj : SurveyAnswer; 

 constructor() { }
 
 ngOnInit() {     
    }
}