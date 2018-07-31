import { Question } from "./question";

export class Survey {

    public userId : number;
    public surveyOwner : string;
    public id : number;
    public timesSubmitted: number;
    public description: string;
    public open: boolean;
    public name : string;
    public questionList: Question[] = [];
    public surveyIsPrivate : boolean;
    public surveyUrl : string;
    public surveyExpires : Date;
}