import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyQuestion } from './survey-question.model';
import { SurveyAnswer } from '../survey-answer/survey-answer.model';


@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.css']
})
export class SurveyQuestionComponent implements OnInit {

@Input('questionList')  public question: SurveyQuestion;
@Input('questionId') public id;

@Output() public deleteEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
    this.question.multipleChoices = false;
  }

  addAnswer(){
      this.question.answerList.push(new SurveyAnswer(""));
  }
  deleteEventHandler($event : any){
      this.question.answerList.splice($event, 1);
  }

  deleteQuestion(){
    this.deleteEvent.emit(this.id);
  }

}