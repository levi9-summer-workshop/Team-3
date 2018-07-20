import { Component } from "@angular/core";

export class SurveyUser {

    public id: number;
    public username:string;
    public email:string;
    public password:string;   
    public blocked:boolean;
    public blockedUntil:Date;

}