package rs.levi9.survey.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Table(name = "answer")
public class Answer extends BaseEntity implements Serializable {

    @NotNull
    @Column(nullable = false)
    private String text;

    @NotNull
    @Column(nullable = false)
    private int timesChosen;

    public Answer() {
    }

    public Answer(String text, int timesChosen) {
        this.text = text;
        this.timesChosen = timesChosen;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getTimesChosen() {
        return timesChosen;
    }

    public void setTimesChosen(int timesChosen) {
        this.timesChosen = timesChosen;
    }
}