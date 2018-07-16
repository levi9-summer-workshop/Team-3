package rs.levi9.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.levi9.survey.model.Answer;
import rs.levi9.survey.model.CustomAnswer;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.model.dto.SubmittedSurvey;
import rs.levi9.survey.repository.SurveyRepository;

import java.util.List;

@Service
public class SurveyService {

    private SurveyRepository surveyRepository;
    private QuestionService questionService;
    private AnswerService answerService;


    @Autowired
    public SurveyService(SurveyRepository surveyRepository, QuestionService questionService, AnswerService answerService) {
        this.surveyRepository = surveyRepository;
        this.questionService = questionService;
        this.answerService = answerService;
    }

    public Survey getOne(Long id) {
        return surveyRepository.getOne(id);
    }

    public List<Survey> findAll() {
        return surveyRepository.findAll();
    }

    public Survey save(Survey survey) {
        return surveyRepository.save(survey);
    }

    public void delete(Long id) {
        surveyRepository.deleteById(id);
    }

    /**
     * This method will increment the amount of times a Survey has been submitted.
     *
     * @param id - id of the Survey whos number should be incremented.
     */
    private void incrementTimesSubmitted(Long id) {
        Survey s = getOne(id);
        s.incrTimesSubmitted();
        save(s);
    }

    /**
     * This method will increment number of times this survey has been filled and
     * save all the answers that user has filled.
     *
     * @param submittedSurvey - object of SubmittedSurvey that we received from controller.
     */
    public void saveFilledSurvey(SubmittedSurvey submittedSurvey) {

        incrementTimesSubmitted(submittedSurvey.getSurveyId());
        for (Answer answer : submittedSurvey.getAnswerList()) {
            answerService.incrementAnswerCount(answer.getId());
        }
        for (CustomAnswer customAnswer : submittedSurvey.getCustomAnswerList()) {
            questionService.saveCustomAnswer(customAnswer);
        }
    }
}