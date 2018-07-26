import { SurveyQuestion } from "../survey-question/survey-question.model";


export class Survey {

    public userId : number;
    public surveyOwner : string;
    public id : number;
    public timesSubmitted: number;
    public description: string;
    public isOpen: boolean;
    public name : string;
    public questionList: SurveyQuestion[];
    
    public constructor(userId : number, surveyOwner: string, name: string, desc: string, q: SurveyQuestion[]){
        this.userId = userId;
        this.name = name;
        this.description = desc;
        this.questionList = q;
        this.surveyOwner = surveyOwner;
    } 
}