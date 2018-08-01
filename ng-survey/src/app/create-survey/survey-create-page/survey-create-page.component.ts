import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from '../survey-question/survey-question.model';
import { SurveyAnswer } from '../survey-answer/survey-answer.model';
import { Survey } from './survey.model';
import { SurveyCreatePageServiceService } from './survey-create-page-service.service';
import { Router } from '@angular/router';
import { LoginServiceService, AuthUser } from '../../templates/login/login-service.service';
import { DatePipe } from '@angular/common';


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
  public expireDate : Date;
  public minDate : string;
  public today = new Date();
  
  constructor(private service : SurveyCreatePageServiceService, private router: Router, private loginService : LoginServiceService) { }

  ngOnInit() {
  
     this.checkIfAccessIsAlowed();
     this.initilaze();
  }

  checkIfAccessIsAlowed(){
    if(!this.loginService.isUserAuth()){
      this.router.navigate(['login']);
      return;
    }
  }

  initilaze(){
    let a1 : SurveyAnswer[] = [];
    this.questions[0] = new SurveyQuestion();
    this.questions[0].answerList = a1;
    this.minDate = this.updateMinimumDate();
    this.expireDate = this.timeStampToDate();
  }

  updateMinimumDate(){
    let myTimeStamp = this.today.setDate(this.today.getDate() + 1);
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(myTimeStamp, 'yyyy-MM-dd'); 
  }

  timeStampToDate(){
    let myTimeStamp = this.today.setDate(this.today.getDate() + 365);
    const datePipe = new DatePipe('en-US');
    return new Date(datePipe.transform(myTimeStamp, 'yyyy-MM-dd')); 
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
    this.removeEmptyAnswers();
    this.service.post(new Survey(this.user.id, this.user.username, this.surveyName, this.desc, this.questions, this.isPrivate, this.expireDate, true)).subscribe(data => {

      let survey = data;
      id = survey.id;
    },
    (error) => { 
      window.alert("Don't leave fields empty!");    
    }, 
    () =>{
      this.router.navigate(['/surveys/'+id]);
    })
    }

    removeEmptyAnswers() {
    for (let i = 0; i < this.questions.length; i++) {

          for (let j = 0; j < this.questions[i].answerList.length; j++) {

              if (this.questions[i].answerList[j].answerText == "") {
                this.questions[i].answerList.splice(j, 1);
                  j--;
              }
          }
      }
  }
}