package rs.levi9.survey.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.levi9.survey.model.Survey;
import rs.levi9.survey.service.SurveyService;

import java.util.List;

@RestController
@RequestMapping("/survey")
public class SurveyController {

    private SurveyService surveyService;

    @Autowired
    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity getOne(@PathVariable("id") Long id) {
        Survey survey = surveyService.getOne(id);
        if (survey == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(survey, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Survey> findAll() {
        return surveyService.findAll();
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity delete(@PathVariable("id") Long id) {
        surveyService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Survey save(@RequestBody Survey survey) {
        return surveyService.save(survey);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Survey update(@RequestBody Survey survey) {
        return surveyService.save(survey);
    }
}
