import { Component, OnInit } from '@angular/core';
import { SurveyUserService } from '../survey-user/survey-user.service';
import { SurveyUser } from '../survey-user/survey-user.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LoginServiceService } from '../templates/login/login-service.service';

@Component({
  selector: 'app-survey-user-list',
  templateUrl: './survey-user-list.component.html',
  styleUrls: ['./survey-user-list.component.css']
})
export class SurveyUserListComponent implements OnInit {
  users : Array<any>;
  users$: Observable<SurveyUser>
  currentUser: SurveyUser;
  isBlocked : boolean;
  user: SurveyUser;
  selectedUser: SurveyUser = { id: null, username: null, email: null, password: null, blocked: false, blockedUntil: null };
  username: string = "default";
  constructor(private surveyService: SurveyUserService, private router: Router  , private loginService : LoginServiceService) { }

    ngOnInit() {
      if(!this.loginService.isUserAuth() || !this.loginService.hasRoleAdmin() ){
        this.router.navigate(['login']);
        return;
      }
      
    this.surveyService.get().subscribe(data => { 
      this.users = data; 
    },
    (error) => { 
      console.log(error);
    });
  }

  changeStatus(user: SurveyUser) {
    this.surveyService.block(user).subscribe(
      () => user.blocked = !user.blocked      
    );
  }

  onUserDelete(user: SurveyUser) {
    this.username = user.username;
    this.selectedUser = user;
  }

  onUserDeleteSubmit() {
    this.surveyService.delete(this.selectedUser.id).subscribe(
      () => { 
        this.selectedUser = { id: null, username: null, email: null, password: null, blocked: false, blockedUntil: null };
      
      },
      (error) => {console.error(error) },
      () => location.reload()
    );
  }
}