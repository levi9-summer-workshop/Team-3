import { Question } from "./question";

export class Survey {

    public id : number;
    public timesSubmitted: number;
    public description: string;
    public isOpen: boolean;
    public name : string;
    public questionList: Question[] = [];
    
}