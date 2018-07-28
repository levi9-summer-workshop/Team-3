package rs.levi9.survey.service;

import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.model.dto.EmailMessage;

import java.util.Base64;

public class UtilsService {

    public String encodeToBase64(String string) {
        return Base64.getEncoder().encodeToString(string.getBytes());
    }

    public EmailMessage createEmailMessage(SurveyUser surveyUser){
        String linkToConfirm = "http://localhost:8080/confirm/"+encodeToBase64(surveyUser.getUsername()+":"+surveyUser.getEmail());
        String subject = "Please confirm your email in order to use Survey Application!";
        return new EmailMessage(surveyUser.getEmail(), subject, linkToConfirm);
    }
}
