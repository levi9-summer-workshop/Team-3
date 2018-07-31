import { SurveyQuestion } from "../survey-question/survey-question.model";
import { User } from "../../user";


export class Survey {

    public id : number;
    public timesSubmitted: number;
    public description: string;
    public open: boolean;
    public name : string;
    public questionList: SurveyQuestion[];
    public surveyIsPrivate : boolean;
    public surveyExpires : Date;
    public surveyUser: User;

    public constructor(userId : number, surveyOwner: string, name: string, desc: string, q: SurveyQuestion[], isPrivate: boolean, surveyExpire : Date, isOpen : boolean){
        this.surveyUser = new User();
        this.surveyExpires = surveyExpire;
        this.surveyIsPrivate = isPrivate;
        this.surveyUser.id = userId;
        this.name = name;
        this.description = desc;
        this.questionList = q;
        this.surveyUser.username = surveyOwner;
        this.open = isOpen;
    } 
}