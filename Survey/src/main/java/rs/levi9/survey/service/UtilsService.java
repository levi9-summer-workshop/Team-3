package rs.levi9.survey.service;

import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.model.dto.EmailMessage;

import java.util.Base64;

public class UtilsService {

    public String encodeToBase64(String string) {
        return Base64.getEncoder().encodeToString(string.getBytes());
    }

    public EmailMessage createEmailConfirmationMessage(SurveyUser surveyUser){
        String linkToConfirm = "Please click here in order to register your account! \n http://localhost:8080/confirm/"+encodeToBase64(surveyUser.getUsername()+":"+surveyUser.getEmail());
        String subject = "Please confirm your email in order to use Survey Application!";
        return new EmailMessage(surveyUser.getEmail(), subject, linkToConfirm);
    }

    public EmailMessage createResetPasswordMessage(SurveyUser surveyUser){
        String text = "We received a 'reset password' request. \nThis is your new password: "+ surveyUser.getPassword();
        String subject = "Password reset request";
        return new EmailMessage(surveyUser.getEmail(), subject, text);
    }
}
