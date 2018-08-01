package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import rs.levi9.survey.model.SurveyUser;
import rs.levi9.survey.service.UserService;

import javax.mail.MessagingException;


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
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity getUsers() {
        return new ResponseEntity(userService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        userService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity login(@RequestBody SurveyUser surveyUser) {
        SurveyUser user = userService.findUser(surveyUser.getUsername(), surveyUser.getPassword());
        if (user == null) {
            return new ResponseEntity(user, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(user, HttpStatus.OK);
        }
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody SurveyUser surveyUser) throws MessagingException {
        surveyUser.setId(null);
        if (userService.checkIfUserExists(surveyUser)) {
            return new ResponseEntity(userService.registerUser(surveyUser), HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/block")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public ResponseEntity block(@RequestBody SurveyUser surveyUser) {
        return new ResponseEntity(userService.block(surveyUser), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public SurveyUser getOne(@PathVariable("id") Long id) {
        return this.userService.getOne(id);
    }

    @PostMapping("/forgot-password")
    public String resetPassword(@RequestBody SurveyUser user) throws MessagingException {
        userService.resetPassword(user.getEmail());
        return "Please check your inbox!";
    }

    @PutMapping("/change-password")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
    public SurveyUser changePassword(@RequestBody SurveyUser surveyUser){
        return userService.changePassword(surveyUser);
    }
}