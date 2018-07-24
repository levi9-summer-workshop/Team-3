import { Component, OnInit } from '@angular/core';
import { Survey } from './survey';
import { Question } from '../fill-question/question';
import { Answer } from '../fill-answer/answer';
import { SurveyCreatePageServiceService } from '../../create-survey/survey-create-page/survey-create-page-service.service';


@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css']
})
export class FillSurveyComponent implements OnInit {

  public survey: Survey;

  constructor(private surveyService : SurveyCreatePageServiceService) { }

  ngOnInit() {
    this.survey = new Survey();
    this.survey.questionList[0] = new Question();
    this.survey.questionList[0].answerList[0] = new Answer();
    this.survey.questionList[0].answerList[0].answerText = "answer text 1";
    this.survey.questionList[0].answerList[1] = new Answer();
    this.survey.questionList[0].answerList[1].answerText = "answer text 2";
    this.survey.questionList[0].multipleChoices = true;

    this.survey.questionList[1] = new Question();
    this.survey.questionList[1].answerList[0] = new Answer();
    this.survey.questionList[1].answerList[0].answerText = "answer text 3";
    this.survey.questionList[1].answerList[1] = new Answer();
    this.survey.questionList[1].answerList[1].answerText = "answer text 41";
    this.survey.questionList[1].answerList[2] = new Answer(); 
    this.survey.questionList[1].answerList[2].answerText = "answer text 34";
    this.survey.questionList[1].multipleChoices = false;

    this.survey.questionList[2] = new Question();
    this.survey.questionList[2].answerList[0] = new Answer();
    this.survey.questionList[2].answerList[0].answerText = "answer text 5";
    this.survey.questionList[2].answerList[1] = new Answer();
    this.survey.questionList[2].answerList[1].answerText = "answer text 6";
    this.survey.questionList[2].multipleChoices = false;


  } 

}
