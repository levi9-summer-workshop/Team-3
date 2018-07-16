package rs.levi9.survey.model.dto;

import rs.levi9.survey.model.Answer;
import rs.levi9.survey.model.CustomAnswer;

import java.util.List;

public class SubmittedSurvey {

    private Long surveyId;

    private List<Answer> answerList;

    private List<CustomAnswer> customAnswerList;

    public SubmittedSurvey() {
    }

    public SubmittedSurvey(Long surveyId, List<Answer> answerList) {
        this.surveyId = surveyId;
        this.answerList = answerList;
    }

    public SubmittedSurvey(Long surveyId, List<Answer> answerList, List<CustomAnswer> customAnswerList) {
        this.surveyId = surveyId;
        this.answerList = answerList;
        this.customAnswerList = customAnswerList;
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

    public List<CustomAnswer> getCustomAnswerList() {
        return customAnswerList;
    }

    public void setCustomAnswerList(List<CustomAnswer> customAnswerList) {
        this.customAnswerList = customAnswerList;
    }
}