package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.model.dto.FilledSurvey;
import rs.levi9.survey.service.SurveyService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/survey")
public class SurveyController {

    private SurveyService surveyService;

    @Autowired
    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity getOne(@PathVariable("id") Long id) {
        Survey survey = surveyService.getOne(id);
        if (survey == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(survey, HttpStatus.OK);
    }

    @GetMapping
    public List<Survey> findAll() {
        return surveyService.findAll();
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        surveyService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping
    public Survey save(@RequestBody Survey survey) {
        return surveyService.save(survey);
    }

    @PutMapping
    public Survey update(@RequestBody Survey survey) {
        return surveyService.save(survey);
    }

    @PostMapping("/filled")
    public ResponseEntity saveSubmittedSurvey(@RequestBody FilledSurvey filledSurvey) {
      this.surveyService.saveFilledSurvey(filledSurvey);
      return new ResponseEntity(filledSurvey, HttpStatus.OK);
    }
}