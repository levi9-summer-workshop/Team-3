package rs.levi9.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.repository.UserRepository;
import rs.levi9.survey.utils.StringGenerator;

import javax.mail.MessagingException;
import java.util.Date;
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
        SurveyUser user = userRepository.findOne(id);
        unblockUserIfNeeded(user);
        return user;
    }

    public void unblockUserIfNeeded(SurveyUser user) {
        if (user.isBlocked() && user.getBlockedUntil() != null && user.getBlockedUntil().compareTo(new Date()) == -1) {
            user.setBlocked(false);
        }
    }

    public List<SurveyUser> findAll() {
        List<SurveyUser> users = userRepository.findAll();
        for (SurveyUser user : users) {
            unblockUserIfNeeded(user);
        }
        return users;
    }

    public SurveyUser save(SurveyUser surveyUser) {
        return userRepository.save(surveyUser);
    }

    public void delete(Long id) {
        userRepository.delete(id);
    }

    public SurveyUser block(SurveyUser surveyUser) {
        if(surveyUser.getBlockedUntil() == null) {
            surveyUser.setBlocked(true);
        }
        return userRepository.save(surveyUser);
    }

    public SurveyUser findUser(String uss, String pass) {
        SurveyUser user = (userRepository.findUserByEmailAndPassword(uss, pass) == null) ? userRepository.findUserByUsernameAndPassword(uss, pass) : userRepository.findUserByEmailAndPassword(uss, pass);
        unblockUserIfNeeded(user);
        return user;
    }

    public boolean checkIfUserExists(SurveyUser surveyUser) {
        return (userRepository.findSurveyUserByEmail(surveyUser.getEmail()) == null && userRepository.findUserByUsername(surveyUser.getUsername()) == null);
    }

    public SurveyUser findUserByUsername(String username) {
        SurveyUser user = userRepository.findUserByUsername(username);
        unblockUserIfNeeded(user);
        return user;
    }

    public SurveyUser findUserByEmail(String mail) {
        return userRepository.findSurveyUserByEmail(mail);
    }

    public SurveyUser changePassword(SurveyUser surveyUser){
        String password = surveyUser.getPassword();
        surveyUser = getOne(surveyUser.getId());
        surveyUser.setPassword(password);
        return save(surveyUser);
    }

    public SurveyUser resetPassword(String email) throws MessagingException {
        SurveyUser user = findUserByEmail(email);
        if (user != null) {
            String[] parts = {new StringGenerator().nextString().substring(0, 10), null};
            user.setPassword(parts[0]);
            userRepository.save(user);
            emailService.sendEmail(new UtilsService().createResetPasswordMessage(user));
        }
        return null;
    }

    public SurveyUser registerUser(SurveyUser surveyUser) throws MessagingException {
        emailService.sendEmail(new UtilsService().createEmailConfirmationMessage(surveyUser));
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