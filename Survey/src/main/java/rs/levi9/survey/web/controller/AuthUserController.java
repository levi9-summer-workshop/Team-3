package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.model.dto.AuthenticatedUser;
import rs.levi9.survey.service.AuthUserService;
import rs.levi9.survey.service.UserService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/auth")
public class AuthUserController {

    private UserService userService;

    @Autowired
    public AuthUserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/user")
    public AuthenticatedUser getUser(Authentication authentication) {
        List<String> roles = new ArrayList<>();
        for(GrantedAuthority authority : authentication.getAuthorities()) {
            roles.add(authority.getAuthority());
        }
        SurveyUser user = userService.findUserByUsername(authentication.getName());
        Long id = user.getId();
        AuthenticatedUser auser = new AuthenticatedUser(id, authentication.getName(), roles, user.getEmailConfirmed());
        return(auser);
    }
}