export class Answer {

    public answerText: string;
    public timesChosen: number;

    public constructor(answerText: string, timesChosen: number) {
        this.answerText = answerText;
        this.timesChosen = timesChosen;
    }

}
