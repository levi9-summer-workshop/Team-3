import { Question } from "../fill-question/question";

export class Survey {

    public id : number;
    public timesSubmitted: number;
    public description: string;
    public isOpen: boolean;
    public name : string;
    public questionList: Question[] = [];
    
   /* public constructor(name: string, desc: string, q: Question[]){
        this.name = name;
        this.description = desc;
        this. questionList = q;
    } */ 
    
}