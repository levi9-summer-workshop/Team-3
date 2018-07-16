package rs.levi9.survey.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "custom_answer")
public class CustomAnswer extends BaseEntity implements Serializable {

    private Long questionId;

    private String customAnswer;

    public CustomAnswer() {
    }

    public CustomAnswer(Long questionId, String customAnswer) {
        this.questionId = questionId;
        this.customAnswer = customAnswer;
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getCustomAnswer() {
        return customAnswer;
    }

    public void setCustomAnswer(String customAnswer) {
        this.customAnswer = customAnswer;
    }
}
