package rs.levi9.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.levi9.survey.model.Answer;
import rs.levi9.survey.model.dto.SubmittedSurvey;
import rs.levi9.survey.repository.AnswerRepository;

import java.util.List;

@Service
public class AnswerService {

    private AnswerRepository answerRepository;


    @Autowired
    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer getOne(Long id) {
        return answerRepository.getOne(id);
    }

    public List<Answer> findAll() {
        return answerRepository.findAll();
    }

    public Answer save(Answer answer) {
        return answerRepository.save(answer);
    }

    public void delete(Long id) {
        answerRepository.deleteById(id);
    }

    public void incrementAnswerCount(Long id) {
        Answer answer = getOne(id);
        answer.incrementTimesChosen();
        save(answer);
    }
}