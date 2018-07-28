package rs.levi9.survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.model.dto.EmailMessage;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Base64;

//@Service
@Component
public class EmailService {

    private JavaMailSender javaMailSender;

    @Autowired
    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(EmailMessage emailMsg) throws MessagingException {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);
            helper.setTo(emailMsg.getTo());
            helper.setSubject(emailMsg.getSubject());
            helper.setText(emailMsg.getText());
            javaMailSender.send(message);
    }
}