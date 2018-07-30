package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.levi9.survey.service.UserService;

@RestController
@RequestMapping
public class EmailConfirmController {

    private UserService userService;

    @Autowired
    public EmailConfirmController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/confirm/{id}")
    public String confirmEmail(@PathVariable("id") String id) {
        if (userService.confirmCode(id)) {
          //  return "You have successfully created your account! <script>window.location.replace('http://localhost:4200');</script>";
            return "<h1>You have successfully created your account!</h1> <script> setTimeout(function(){ window.location.replace('http://localhost:4200'); }, 2000);</script>";

        } else {
            return "Something is wrong!";
        }
    }
}