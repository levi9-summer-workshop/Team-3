package rs.levi9.survey.service;

import org.springframework.stereotype.Service;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public SurveyUser getOne(Long id) {
        return userRepository.getOne(id);
    }

    public List<SurveyUser> findAll() {
        return userRepository.findAll();
    }

    public SurveyUser save(SurveyUser surveyUser) {
        return userRepository.save(surveyUser);
    }

    public void delete(Long id) {
        userRepository.delete(id);
    }

    public SurveyUser block(SurveyUser surveyUser) {
        surveyUser.setBlocked(!surveyUser.isBlocked());
        return userRepository.save(surveyUser);
    }

    public SurveyUser findUser(String uss, String pass) {
        return (userRepository.findUserByEmailAndPassword(uss, pass) == null) ? userRepository.findUserByUsernameAndPassword(uss, pass) : userRepository.findUserByEmailAndPassword(uss, pass);
    }

    public boolean checkIfUserExists(SurveyUser surveyUser) {
        return(userRepository.findUserByEmail(surveyUser.getEmail()) == null && userRepository.findUserByUsername( surveyUser.getUsername()) == null);
    }
}