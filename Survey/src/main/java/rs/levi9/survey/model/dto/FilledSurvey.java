package rs.levi9.survey.model.dto;

import java.util.List;

public class FilledSurvey {

    private long id;
    private List<FilledQuestion> questions;

    public FilledSurvey() {
    }

    public FilledSurvey(long id, List<FilledQuestion> questions) {
        this.id = id;
        this.questions = questions;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<FilledQuestion> getQuestions() {
        return questions;
    }

    public void setQuestions(List<FilledQuestion> questions) {
        this.questions = questions;
    }
}