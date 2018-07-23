import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Answer } from './answer';

@Component({
  selector: 'app-fill-answer',
  templateUrl: './fill-answer.component.html',
  styleUrls: ['./fill-answer.component.css']
})
export class FillAnswerComponent implements OnInit {

  @Input('buttonId') public id : number;
  @Input('answerModel') public answer : Answer;
  @Input('multipleChoises') public multiChoises : boolean;

  constructor() { }

  ngOnInit() {
  }
}