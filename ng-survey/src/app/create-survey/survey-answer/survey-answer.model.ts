import { Component } from "@angular/core";

export class SurveyAnswer {

  public answerText: string;
  public timesChosen: number;
  public isCustom: boolean;
  
  public constructor(str:string){
    this.answerText = str;
  }
  public getText(){
    return this.answerText;
  }
}