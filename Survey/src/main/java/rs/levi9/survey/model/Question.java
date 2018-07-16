package rs.levi9.survey.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "question")
public class Question extends BaseEntity implements Serializable {

    @NotNull
    @Column(nullable = false)
    private String questionText;

    @OneToMany(cascade = CascadeType.ALL)
    private List<CustomAnswer> customAnswers;

    @OneToMany(cascade = CascadeType.ALL)
    @NotNull
    @Column(nullable = false)
    private List<Answer> answerList;

    public Question() {
    }

    public Question(@NotNull String questionText, List<Answer> answerList) {
        this.questionText = questionText;
        this.answerList = answerList;
    }

    public Question(@NotNull String questionText, List<CustomAnswer> customAnswers, @NotNull List<Answer> answerList) {
        this.questionText = questionText;
        this.customAnswers = customAnswers;
        this.answerList = answerList;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public List<Answer> getAnswerList() {
        return answerList;
    }

    public void setAnswerList(List<Answer> answerList) {
        this.answerList = answerList;
    }

    public List<CustomAnswer> getCustomAnswers() {
        return customAnswers;
    }

    public void setCustomAnswers(List<CustomAnswer> customAnswers) {
        this.customAnswers = customAnswers;
    }
}
