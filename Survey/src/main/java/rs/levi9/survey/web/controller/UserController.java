package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity getMockedUser(){
        List<SurveyUser> user = new ArrayList();
        user.add(new SurveyUser("111", "aaa"));
        user.add(new SurveyUser("222", "bbb"));
        user.add(new SurveyUser("333", "ccc"));
        user.add(new SurveyUser("444", "ddd"));
        user.add(new SurveyUser("555", "eee"));
        user.add(new SurveyUser("666", "fff"));
            boolean t = true;
            if(t){
                return new ResponseEntity(user,HttpStatus.BAD_REQUEST);
            }
        user.add(new SurveyUser("777", "ggg"));
        user.add(new SurveyUser("aaaaaaaaaaaa", "bbbbbbbbbb"));
        return new ResponseEntity(user, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity login(@RequestBody SurveyUser surveyUser){
        SurveyUser user = userService.findUser(surveyUser.getUsername(), surveyUser.getPassword());
        if(user == null){
            return new ResponseEntity(user,HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity(user, HttpStatus.OK);
        }
    }

}