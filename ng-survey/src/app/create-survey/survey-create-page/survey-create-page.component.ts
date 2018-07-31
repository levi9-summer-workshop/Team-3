import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from '../survey-question/survey-question.model';
import { SurveyAnswer } from '../survey-answer/survey-answer.model';
import { Survey } from './survey.model';
import { SurveyCreatePageServiceService } from './survey-create-page-service.service';
import { Router } from '@angular/router';
import { LoginServiceService, AuthUser } from '../../templates/login/login-service.service';
import { SurveyUser } from '../../survey-user/survey-user.model';

@Component({
  selector: 'app-survey-create-page',
  templateUrl: './survey-create-page.component.html',
  styleUrls: ['./survey-create-page.component.css']
})
export class SurveyCreatePageComponent implements OnInit {

  public surveyName : string;
  public desc: string;
  public questions : SurveyQuestion[] = [];
  public user: AuthUser;
  public isPrivate = false;
 //surveyIsPrivate

  constructor(private service : SurveyCreatePageServiceService, private router: Router, private loginService : LoginServiceService) { }

  ngOnInit() {
    if(!this.loginService.isUserAuth()){
      this.router.navigate(['login']);
      return;
    }
      let a1 : SurveyAnswer[] = [];
      this.questions[0] = new SurveyQuestion();
      this.questions[0].answerList = a1;
     
      
  }
  addQuestion(){
    this.questions.push(new SurveyQuestion());
    let  s1 : SurveyAnswer[] = [];
    this.questions[this.questions.length - 1].answerList = s1;
  }
  
  deleteEventHandler($event : any){
    this.questions.splice($event, 1);
  }
  
  submit(){
    let id = 0;
    if(this.surveyName == null){
      this.surveyName = "Survey default name";
    }
    if(this.desc == null){
      this.desc = "default description";
    }
  
    this.user = this.loginService.getAuthUser();

    this.service.post(new Survey(this.user.id, this.user.username, this.surveyName, this.desc, this.questions, this.isPrivate)).subscribe(data => {
      let survey = data;
      id = survey.id;
    },
    (error) => { 
      // console.log(error); 
      window.alert("Don't leave fields empty!");    
    }, 
    () =>{
      this.router.navigate(['/surveys/'+id]);
    })
    }
}