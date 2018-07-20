import { Component, OnInit } from '@angular/core';
import { SurveyUserService } from '../survey-user/survey-user.service';
import { SurveyUser } from '../survey-user/survey-user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-survey-user-list',
  templateUrl: './survey-user-list.component.html',
  styleUrls: ['./survey-user-list.component.css']
})
export class SurveyUserListComponent implements OnInit {
  users : Array<any>;
  users$: Observable<SurveyUser>
  currentUser: SurveyUser;
  constructor(private surveyService: SurveyUserService) { }
  isBlocked : boolean;
  user: SurveyUser;
  selectedUser: SurveyUser = { id: null, username: null, email: null, password: null, blocked: false, blockedUntil: null };


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

  changeStatus(user: SurveyUser) {
    this.surveyService.block(this.user).subscribe(
      () => user.blocked = !user.blocked
    );
  }

  onUserDelete(user: SurveyUser) {
    this.selectedUser = user;
  }

  onUserDeleteSubmit() {
    this.surveyService.delete(this.selectedUser.id).subscribe(
      () => { 
        this.users$ = this.surveyService.get();
        this.selectedUser = { id: null, username: null, email: null, password: null, blocked: false, blockedUntil: null };
      },
      (error) => console.error(error)
    );
  }
}