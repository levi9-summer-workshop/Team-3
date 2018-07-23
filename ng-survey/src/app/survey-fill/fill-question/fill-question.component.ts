import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../fill-answer/answer';
import { Question } from './question';

@Component({
  selector: 'app-fill-question',
  templateUrl: './fill-question.component.html',
  styleUrls: ['./fill-question.component.css']
})
export class FillQuestionComponent implements OnInit {

 @Input('questionModel') public question : Question;

  constructor() { }

  ngOnInit() {
   
  }

}
