import { Component, OnInit } from '@angular/core';
import { SurveyCreatePageServiceService } from '../../create-survey/survey-create-page/survey-create-page-service.service';
import { Router } from '@angular/router';
import { Survey } from '../survey';

@Component({
  selector: 'app-all-surveys',
  templateUrl: './all-surveys.component.html',
  styleUrls: ['./all-surveys.component.css']
})
export class AllSurveysComponent implements OnInit {

  public surveys : Survey[] = [];
  constructor(private surveyService : SurveyCreatePageServiceService){}//, private router : Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.surveyService.get().subscribe(data =>{
      this.surveys[0] = new Survey();
      this.surveys = data;
    },
    (error) => { 
      console.log("ne radi"); 
     }, 
     () =>{
  // this.router.navigate(['/home']);
  
     })
  }
}
