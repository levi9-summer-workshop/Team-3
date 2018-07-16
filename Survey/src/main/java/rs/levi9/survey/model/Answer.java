package rs.levi9.survey.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "answerText")
public class Answer extends BaseEntity implements Serializable {

    private String answerText;

    private int timesChosen;

    public Answer() {
    }

    public Answer(String answerText, int timesChosen) {
        this.answerText = answerText;
        this.timesChosen = timesChosen;
    }

    public String getAnswerText() {
        return answerText;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }

    public int getTimesChosen() {
        return timesChosen;
    }

    public void setTimesChosen(int timesChosen) {
        this.timesChosen = timesChosen;
    }

    public void incrementTimesChosen() {
        this.timesChosen++;
    }
}