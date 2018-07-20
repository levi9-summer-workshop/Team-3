package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.service.UserService;


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
    public ResponseEntity getUsers(){

        return new ResponseEntity(userService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        userService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity login(@RequestBody SurveyUser surveyUser){
        SurveyUser user = userService.findUser(surveyUser.getUsername(), surveyUser.getPassword());
        if(user == null){
            return new ResponseEntity(user, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(user, HttpStatus.OK);
        }
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody SurveyUser surveyUser) {
        surveyUser.setId(null);
        if(userService.checkIfUserExists(surveyUser)) {
            return new ResponseEntity(userService.save(surveyUser), HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/block")
    public ResponseEntity block(@RequestBody SurveyUser surveyUser) {
        return new ResponseEntity(userService.block(surveyUser), HttpStatus.OK);
    }
}