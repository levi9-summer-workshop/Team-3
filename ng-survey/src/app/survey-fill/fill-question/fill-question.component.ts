import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../answer';
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
  isClicked(i : number){
    console.log("is clicked " + i);
  }
  buttonIsClicked(index: number){
    for(let i = 0; i < this.question.answerList.length; i++){
      if(i == index){
        this.question.answerList[i].isClicked = true;
        
      }else {
      this.question.answerList[i].isClicked = false;
    }
    }
  }
}
