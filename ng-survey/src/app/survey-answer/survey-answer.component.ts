import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyAnswer } from './survey-answer.model';

@Component({
  selector: 'app-survey-answer',
  templateUrl: './survey-answer.component.html',
  styleUrls: ['./survey-answer.component.css']
})
export class SurveyAnswerComponent implements OnInit {
  
  @Input('srvAnswer') public answerObj : SurveyAnswer; 
  @Input('answerId') public id;
  @Output() public deleteEvent = new EventEmitter<number>();
  
 constructor() { }
 
   ngOnInit() {     
    }

    deleteAnswer(){
      this.deleteEvent.emit(this.id);
    }
}