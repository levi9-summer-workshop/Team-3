package rs.levi9.survey.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "custom_answer")
public class CustomAnswer extends BaseEntity implements Serializable {


    @ManyToOne
    private Question question;

    private String customAnswer;

    public CustomAnswer() {
    }

    public CustomAnswer(Question question, String customAnswer) {
        this.question = question;
        this.customAnswer = customAnswer;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getCustomAnswer() {
        return customAnswer;
    }

    public void setCustomAnswer(String customAnswer) {
        this.customAnswer = customAnswer;
    }
}
