import { Component } from "@angular/core";
import { SurveyQuestion } from "../survey-question/survey-question.model";


export class Survey {

    public userId : number;

    public id : number;
    public timesSubmitted: number;
    public description: string;
    public isOpen: boolean;
    public name : string;
    public questionList: SurveyQuestion[];
    
    public constructor(userId : number, name: string, desc: string, q: SurveyQuestion[]){
        this.userId = userId;
        this.name = name;
        this.description = desc;
        this. questionList = q;
    } 
}