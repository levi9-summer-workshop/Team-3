import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Survey } from './survey';
import { SurveyCreatePageServiceService } from '../../create-survey/survey-create-page/survey-create-page-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FilledQuestionModel } from '../filled-survey-models/filled-question-model';
import { FilledSurveyModel } from '../filled-survey-models/filled-survey-model';



@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.css']
})
export class FillSurveyComponent implements OnInit, OnDestroy  {

  public survey: Survey;

  id: number;
  private sub: any;
  
  constructor(private surveyService : SurveyCreatePageServiceService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       this.survey = new Survey();    
       this.getOne(this.id);
    });
  } 

  getOne(id : number){

    this.surveyService.getById(id).subscribe(data =>{
          this.survey = data;
    },
    (error) => { 
      console.log(error); 
    })
    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }

    onFormSubmit(f : NgForm){
     
      let questions : FilledQuestionModel[] = [];
      let surv = new FilledSurveyModel(questions);
      surv.id = this.survey.id;
     
      //loop through whole form (aka. question list)
       for(let i = 0; i < this.survey.questionList.length; i++){
         //create new question in an array of questions
      
        questions.push(new FilledQuestionModel());
        //set question id 
        questions[i].id = this.survey.questionList[i].id;
        questions[i].answers = [];
        //create temporary 

        if(this.survey.questionList[i].multipleChoices == false){
          //print answer text for testing purposes.
           for(let j = 0; j < this.survey.questionList[i].answerList.length; j++){
            if(this.survey.questionList[i].answerList[j].answerText === f.controls[this.survey.questionList[i].id].value){
     
               questions[i].answers[0] = this.survey.questionList[i].answerList[j].id;
            }
           }
          } else{
            //if it's checkbox
            for(let j = 0, k = 0; j < this.survey.questionList[i].answerList.length; j++){
             if(f.controls[this.survey.questionList[i].answerList[j].id].value == true){
                  questions[i].answers[k] = this.survey.questionList[i].answerList[j].id;
                  k++;  
                }
             } 
          }
       }
       this.submitFilledSurvey(surv);
    } 
    submitFilledSurvey(survey : FilledSurveyModel){
    this.surveyService.postSubmitedSurvey(survey).subscribe(() =>{
      this.router.navigate(['/home']);
    },
       (error) => {console.log(error),
      () =>{
      
      } 
    })
    }
}