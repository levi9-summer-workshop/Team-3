import { Component } from "@angular/core";
import { SurveyQuestion } from "../survey-question/survey-question.model";

export class Survey {

    public timesSubmitted: number;
    public description: string;
    public isOpen: boolean;
    public questionList: SurveyQuestion[];
    
    public constructor(name: string, q: SurveyQuestion[]){
        this.description = name;
        this. questionList = q;
    }
    
}