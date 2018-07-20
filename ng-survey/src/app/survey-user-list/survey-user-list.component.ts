import { Component, OnInit } from '@angular/core';
import { SurveyUserService } from '../survey-user/survey-user.service';
import { SurveyUser } from '../survey-user/survey-user.model';

@Component({
  selector: 'app-survey-user-list',
  templateUrl: './survey-user-list.component.html',
  styleUrls: ['./survey-user-list.component.css']
})
export class SurveyUserListComponent implements OnInit {
  users : Array<any>;
  currentUser: SurveyUser;
  constructor(private surveyService: SurveyUserService) { }
  isBlocked : boolean;
  user: SurveyUser;

    ngOnInit() {
    this.surveyService.get().subscribe(data => { 
      this.users = data; 
      for(let i =0; i< this.users.length; i++){
          console.log(
            this.users[i].blocked);
      }
    },
    (error) => { 
      console.log(error);
    },
    () => {
        console.log("IT'S COMPLETE!");
    });
  }

  onDeleteUser(user: SurveyUser) {
    this.user = user;
  }

  onDeleteUserSubmit() {
    
  }
}