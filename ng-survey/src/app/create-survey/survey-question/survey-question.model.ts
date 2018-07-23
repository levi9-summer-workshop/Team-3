import { Component } from "@angular/core";
import { SurveyAnswer } from "../survey-answer/survey-answer.model";

export class SurveyQuestion {

    public questionText: string;
    public answerList : SurveyAnswer[];
    public multipleChoices : boolean;

    public constructor(){
        //this.answerList[0] = new SurveyAnswer("default text");
    }
}