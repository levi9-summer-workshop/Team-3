package rs.levi9.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rs.levi9.survey.model.Answer;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.model.dto.FilledQuestion;
import rs.levi9.survey.model.dto.FilledSurvey;
import rs.levi9.survey.repository.SurveyRepository;
import rs.levi9.survey.utils.StringGenerator;

import java.util.List;

@Service
public class SurveyService {

    private SurveyRepository surveyRepository;
    private AnswerService answerService;
    private UserService userService;

    @Autowired
    public SurveyService(SurveyRepository surveyRepository, AnswerService answerService, UserService userService) {
        this.surveyRepository = surveyRepository;
        this.answerService = answerService;
        this.userService = userService;
    }

    public Survey getOne(Long id) {
        return surveyRepository.findOne(id);
    }

    public List<Survey> findAll() {
        List<Survey> surveys = surveyRepository.findAll();
        for(Survey s : surveys){
            s.setUserId(s.getSurveyUser().getId());
            s.setSurveyOwner(s.getSurveyUser().getUsername());
        }
        return surveys;
    }

    public Survey save(Survey survey) {
        survey.setSurveyUser(userService.getOne(survey.getUserId()));
        survey.setSurveyUrl(new StringGenerator().nextString());
        surveyRepository.save(survey);

        return surveyRepository.save(survey);
    }

    public void delete(Long id) {
        surveyRepository.delete(id);
    }

    /**
     * This method will increment the amount of times a Survey has been submitted.
     *
     * @param id - id of the Survey whos number should be incremented.
     */
    private void incrementTimesSubmitted(Long id) {
        Survey s = getOne(id);
        s.incrTimesSubmitted();
        surveyRepository.save(s);
    }

    /**
     * This method will increment number of times this survey has been filled and
     * save all the answers that user has filled.
     *
     * @param filledSurvey - object of FilledSurvey that we received from controller.
     */
    public void saveFilledSurvey(FilledSurvey filledSurvey) {
        incrementTimesSubmitted(filledSurvey.getId());
        for(FilledQuestion question : filledSurvey.getQuestions()){
            for (Long id : question.getAnswers()) {
                answerService.incrementAnswerCount(id);
            }
        }
    }

    public List<Survey> findSurveysByUserId(Long id){
        return this.surveyRepository.findSurveysBySurveyUserId(id);
    }

    public void closeSurvey(Long id) {
        Survey survey = surveyRepository.getOne(id);
        survey.setOpen(false);
        surveyRepository.save(survey);
    }
    public Survey fidnSurveyByUrl(String url){
        return this.surveyRepository.findSurveyBySurveyUrl(url);
    }
}