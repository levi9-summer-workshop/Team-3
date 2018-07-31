import { SurveyQuestion } from "../survey-question/survey-question.model";


export class Survey {

    public userId : number;
    public surveyOwner : string;
    public id : number;
    public timesSubmitted: number;
    public description: string;
    public open: boolean;
    public name : string;
    public questionList: SurveyQuestion[];
    public surveyIsPrivate : boolean;
    public surveyExpires : Date;

    public constructor(userId : number, surveyOwner: string, name: string, desc: string, q: SurveyQuestion[], isPrivate: boolean, surveyExpire : Date){
        this.surveyExpires = surveyExpire;
        this.surveyIsPrivate = isPrivate;
        this.userId = userId;
        this.name = name;
        this.description = desc;
        this.questionList = q;
        this.surveyOwner = surveyOwner;
        this.open = true;
    } 
}