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
    public surveyIsPublic : boolean;

    public constructor(userId : number, surveyOwner: string, name: string, desc: string, q: SurveyQuestion[], isPublic: boolean){
        this.surveyIsPublic = isPublic;
        this.userId = userId;
        this.name = name;
        this.description = desc;
        this.questionList = q;
        this.surveyOwner = surveyOwner;
        this.open = true;
    } 
}