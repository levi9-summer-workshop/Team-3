package rs.levi9.survey.model.dto;

import java.util.List;

public class FilledQuestion {

    private Long id;
    private List<Long> answers;

    public FilledQuestion() {
    }

    public FilledQuestion(Long id, List<Long> answers) {
        this.id = id;
        this.answers = answers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Long> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Long> answers) {
        this.answers = answers;
    }
}
