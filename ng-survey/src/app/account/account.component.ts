import { Component, OnInit } from '@angular/core';
import { AuthUser, LoginServiceService } from '../templates/login/login-service.service';
import { Router } from '../../../node_modules/@angular/router';
import { SurveyUserService } from '../survey-user/survey-user.service';
import { SurveyUser } from '../survey-user/survey-user.model';
import { PassThrough } from 'stream';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

public user : AuthUser;
public newPasword : string;

  constructor(private service : LoginServiceService , private router: Router, private userService : SurveyUserService) { }

  ngOnInit() {

    if(!this.service.isUserAuth()){
      this.router.navigate(['login']);
      return;
    }
    this.user = this.service.getAuthUser();
  }

  changePassword(){
    let user  = new SurveyUser();
    user.password = this.newPasword;
    user.id = this.user.id;

    this.userService.changePassword(user).subscribe(
      () =>{ 
        location.reload();
      },
      (error) => console.log(error)
    )
  }

}