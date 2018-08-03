import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthUser, LoginServiceService } from '../templates/login/login-service.service';
import { Router } from '../../../node_modules/@angular/router';
import { SurveyUserService } from '../survey-user/survey-user.service';
import { SurveyUser } from '../survey-user/survey-user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

public user : AuthUser;
public newPasword : string;

@ViewChild('newpass') input; 

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
      () =>{ },
      (error) => console.log(error)
    )
  }

  onOk() {
    location.reload();
  }

  myFunction() {
    var x = document.getElementById("newpass");
    if (this.input.nativeElement.type === "password") {
      this.input.nativeElement.type = "text";
    } else {
      this.input.nativeElement.type = "password";
    }
}

}