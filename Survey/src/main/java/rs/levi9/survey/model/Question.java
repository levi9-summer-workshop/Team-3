package rs.levi9.survey.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "question")
public class Question extends BaseEntity implements Serializable {


    @Column(nullable = false)
    private String questionText;

    @OneToMany(cascade = CascadeType.ALL)
    @Column(nullable = false)
    private List<Answer> answerList;

    private boolean multipleChoices;

    public Question() {
    }

    public Question(String questionText, List<Answer> answerList) {
        this.questionText = questionText;
        this.answerList = answerList;
    }

    public Question(String questionText, List<Answer> answerList, boolean multipleChoices) {
        this.questionText = questionText;
        this.answerList = answerList;
        this.multipleChoices = multipleChoices;
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

    public boolean isMultipleChoices() {
        return multipleChoices;
    }

    public void setMultipleChoices(boolean multipleChoices) {
        this.multipleChoices = multipleChoices;
    }
}