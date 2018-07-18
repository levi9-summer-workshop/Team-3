package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.service.UserService;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<SurveyUser> getMockedUser() throws Exception {
        List<SurveyUser> user = new ArrayList();
        user.add(new SurveyUser("111", "aaa"));
        user.add(new SurveyUser("222", "bbb"));
        user.add(new SurveyUser("333", "ccc"));
        user.add(new SurveyUser("444", "ddd"));
        user.add(new SurveyUser("555", "eee"));
        user.add(new SurveyUser("666", "fff"));
        user.add(new SurveyUser("777", "ggg"));
        boolean t = true;
        if(t == true){
           // throw new Exception("blablabalblablblbl");
        }
        user.add(new SurveyUser("aaaaaaaaaaaa", "bbbbbbbbbb"));
        return user;
    }
    @PostMapping
    public SurveyUser login(@RequestBody SurveyUser surveyUser){
        return null;
    }

}