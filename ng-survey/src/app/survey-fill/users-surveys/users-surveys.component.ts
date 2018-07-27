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
}
