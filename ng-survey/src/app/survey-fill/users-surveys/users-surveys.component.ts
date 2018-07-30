import { Component, OnInit } from '@angular/core';
import { SurveyCreatePageServiceService } from '../../create-survey/survey-create-page/survey-create-page-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Survey } from '../survey';
import { LoginServiceService } from '../../templates/login/login-service.service';

@Component({
  selector: 'app-users-surveys',
  templateUrl: './users-surveys.component.html',
  styleUrls: ['./users-surveys.component.css']
})
export class UsersSurveysComponent implements OnInit {

  id: number;
  private sub: any;
  public surveys : Survey[] = [];
  selectedSurvey = new Survey();

  constructor(private surveyService : SurveyCreatePageServiceService, private router: Router, private route: ActivatedRoute, private loginService : LoginServiceService){}//, private router : Router) { }

  ngOnInit() {
   
    if(!this.loginService.isUserAuth()){
      this.router.navigate(['login']);
      return;
    }
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.surveys[0] = new Survey();    
      this.getSurveysByUserId(this.id);
   });
  }

  getSurveysByUserId(id : number){
    this.surveyService.getSurveysByUserId(id).subscribe(data =>{
      this.surveys = data;
     })
  }

  onSurveyDelete(survey: Survey) {
    this.selectedSurvey = survey;
  }

  onSurveyDeleteSubmit() {
    this.surveyService.delete(this.selectedSurvey.id).subscribe(
      this.selectedSurvey = null,
      (error) => console.log(error),
      () => this.getSurveysByUserId(this.id)
    )
  }

  onCloseSurvey(id: number) {
     this.surveyService.close(id).subscribe
    (
      () => this.findSurvById(id).open = false
    )
  }

  findSurvById(id: number){
    for(let i = 0; i < this.surveys.length; i++){
        if(this.surveys[i].id == id){
          return this.surveys[i];
        }
    }
  }

  copyMessage(index : number){
    let val = this.surveys[index - 1].surveyUrl;
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}