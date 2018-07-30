package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.model.dto.FilledSurvey;
import rs.levi9.survey.service.SurveyService;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200")
public class SharedSurveyController {

    private SurveyService surveyService;

    @Autowired
    public SharedSurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @GetMapping("/get-surv/{id}")
    public ResponseEntity getSurveyByUrl(@PathVariable("id") String id) {
        Survey s = surveyService.fidnSurveyByUrl(id);
        if (s == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(s, HttpStatus.OK);
    }

    @PostMapping("/filled")
    public ResponseEntity saveSubmittedSurvey(@RequestBody FilledSurvey filledSurvey) {
        this.surveyService.saveFilledSurvey(filledSurvey);
        return new ResponseEntity(filledSurvey, HttpStatus.OK);
    }
}