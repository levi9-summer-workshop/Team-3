package rs.levi9.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.levi9.survey.model.Question;
import rs.levi9.survey.repository.QuestionRepository;

import java.util.List;

@Service
public class QuestionService {

    private QuestionRepository questionRepository;

    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question getOne(Long id) {
        return questionRepository.getOne(id);
    }

    public List<Question> findAll() {
        return questionRepository.findAll();
    }

    public Question save(Question question) {
        return questionRepository.save(question);
    }

    public void delete(Long id) {
        questionRepository.deleteById(id);
    }
}