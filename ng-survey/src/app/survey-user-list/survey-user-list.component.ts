import { Component, OnInit } from '@angular/core';
import { SurveyUserService } from '../survey-user/survey-user.service';

@Component({
  selector: 'app-survey-user-list',
  templateUrl: './survey-user-list.component.html',
  styleUrls: ['./survey-user-list.component.css']
})
export class SurveyUserListComponent implements OnInit {
  users : Array<any>;
  constructor(private surveyService: SurveyUserService) { }

    ngOnInit() {
    this.surveyService.get().subscribe(data => { 
      this.users = data; 
    },
    (error) => {
      console.log(error);
    },
    () => {
        console.log("IT'S COMPLETE!");
    });
  }
}