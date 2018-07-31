import { Question } from "./question";
import { User } from "../user";

export class Survey {

    public id : number;
    public timesSubmitted: number;
    public description: string;
    public open: boolean;
    public name : string;
    public questionList: Question[] = [];
    public surveyIsPrivate : boolean;
    public surveyUrl : string;
    public surveyExpires : Date;
    public surveyUser: User;
}