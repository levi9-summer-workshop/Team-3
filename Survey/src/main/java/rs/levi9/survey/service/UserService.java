package rs.levi9.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.model.dto.EmailMessage;
import rs.levi9.survey.repository.UserRepository;

import javax.mail.MessagingException;
import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;
    private EmailService emailService;

    @Autowired
    public UserService(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    public SurveyUser getOne(Long id) {
        return userRepository.findOne(id);
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
        return (userRepository.findUserByEmail(surveyUser.getEmail()) == null && userRepository.findUserByUsername(surveyUser.getUsername()) == null);
    }

    public SurveyUser findUserByUsername(String username) {
        return this.userRepository.findUserByUsername(username);
    }

    public SurveyUser registerUser(SurveyUser surveyUser) throws MessagingException {
        emailService.sendEmail(new UtilsService().createEmailMessage(surveyUser));
        surveyUser.setAccountConfirmationCode(new UtilsService().encodeToBase64(surveyUser.getUsername() + ":" + surveyUser.getEmail()));
        return save(surveyUser);
    }

    public boolean confirmCode(String code) {
        SurveyUser user = userRepository.findSurveyUserByAccountConfirmationCode(code);
        if (user != null) {
            setUserToRegistered(user);
            return true;
        }
        return false;
    }

    public void setUserToRegistered(SurveyUser surveyUser) {
        surveyUser.setEmailConfirmed(true);
        userRepository.save(surveyUser);
    }

}