import { Component, OnInit } from '@angular/core';
import { SurveyUserService } from '../survey-user/survey-user.service';
import { SurveyUser } from '../survey-user/survey-user.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LoginServiceService } from '../templates/login/login-service.service';
import { User } from '../user';

@Component({
  selector: 'app-survey-user-list',
  templateUrl: './survey-user-list.component.html',
  styleUrls: ['./survey-user-list.component.css']
})
export class SurveyUserListComponent implements OnInit {

  users : SurveyUser[];
  isBlocked : boolean;
  user: SurveyUser;
  selectedUser: SurveyUser;
  username: string = "default";
  allowCalendar : boolean = false;
  blockedUntil : Date;


  constructor(private surveyService: SurveyUserService, private router: Router  , private loginService : LoginServiceService) { }

    ngOnInit() {
      if(!this.loginService.isUserAuth() || !this.loginService.hasRoleAdmin() ){
        this.router.navigate(['login']);
        return;
      }
      this.selectedUser = new SurveyUser();
   this. getUserList();
  }

  getUserList(){
    this.surveyService.get().subscribe(data => { 
      this.users = data; 
      this.users.splice(0,1);
    },
    (error) => { 
      console.log(error);
    });
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
      () => this.getUserList()
    );
  }

  setAllowCalendarTrue() {
    this.allowCalendar = true;
  }

  setAllowCalendarFalse() {
    this.allowCalendar = false;
  }

  onBlockUser(user: SurveyUser){
    this.username = user.username;
    this.user = user;
    console.log(this.user.blocked);
  }

  blockUserOk() {
     if(!this.allowCalendar) {
        this.user.blocked = true;
        this.user.blockedUntil = null;
     } else {
        this.user.blocked = true;
        this.user.blockedUntil = this.blockedUntil;
     }
     this.surveyService.block(this.user).subscribe((data)=>{
     },
     (error) => { console.log(error);
    }
    );
     console.log("blocked: " + this.user.blocked + ", blocked until: " + this.user.blockedUntil);
  }

  
  getBlockedUntil(user: SurveyUser) {
    if(user.blockedUntil != null){
    this.blockedUntil = user.blockedUntil;
    return this.blockedUntil;}
  }
 
}