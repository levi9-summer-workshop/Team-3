import { FilledQuestionModel } from "./filled-question-model";

export class FilledSurveyModel {

    public id: number;
    public questions: FilledQuestionModel[] = [];
    public constructor(questions : FilledQuestionModel[]){
        this.questions = questions;
    }
}

