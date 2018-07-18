package rs.levi9.survey.model.dto;

import rs.levi9.survey.model.Answer;

import java.util.List;

public class SubmittedSurvey {

    private Long surveyId;

    private List<Answer> answerList;

    public SubmittedSurvey() {
    }

    public SubmittedSurvey(Long surveyId, List<Answer> answerList) {
        this.surveyId = surveyId;
        this.answerList = answerList;
    }

    public Long getSurveyId() {
        return surveyId;
    }

    public void setSurveyId(Long surveyId) {
        this.surveyId = surveyId;
    }

    public List<Answer> getAnswerList() {
        return answerList;
    }

    public void setAnswerList(List<Answer> answerList) {
        this.answerList = answerList;
    }
}