import { Component } from "@angular/core";
import { Answer } from "./answer";


export class Question {

    public id : number;
    public questionText: string;
    public answerList : Answer[] = [];
    public multipleChoices : boolean;

}