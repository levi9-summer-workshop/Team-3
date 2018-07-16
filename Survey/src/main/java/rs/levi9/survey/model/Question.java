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
    private String text;

    @OneToMany()
    @NotNull
    @Column(nullable = false)
    private List<Answer> answer;


    public Question() {
    }

    public Question(@NotNull String text, List<Answer> answer) {
        this.text = text;
        this.answer = answer;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<Answer> getAnswer() {
        return answer;
    }

    public void setAnswer(List<Answer> answer) {
        this.answer = answer;
    }
}
