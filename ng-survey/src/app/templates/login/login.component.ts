import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService, AuthUser } from './login-service.service';
import { THIS_EXPR } from '../../../../node_modules/@angular/compiler/src/output/output_ast';
import { SurveyUserService } from '../../survey-user/survey-user.service';
import { SurveyUser } from '../../survey-user/survey-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : AuthUser;
  public errorMessage : string;
  public message : string;
  public username : string;
  public password : string;
  public error : string;
  public lgdin : boolean;
  public email: string;
  
  constructor(private loginService : LoginServiceService, private router: Router, private userService : SurveyUserService) { }

  ngOnInit() {

    if(this.loginService.isUserAuth() == true){
        location.reload();
    }

    this.user = new AuthUser();
    this.message = "Bad credentials!";
    this.username = "";
    this.password = "";
  }

  public takeLoginData(form: NgForm) {
      this.loginService.login(form.value.username, form.value.password).subscribe(
        (data) => { 
          this.user = { ...data };
          this.lgdin = true;
          this.message = "Success!";
          form.reset();
        },
        (error) => {
          this.error = error;
        },
        () => {
          if(!this.user.emailConfirmed) {
            this.loginService.logout();
            this.lgdin = false;
            this.message = "You must confirm your account. Check your mail.";
          }
          if(this.user.blocked) {
            this.loginService.logout();
            this.lgdin = false;
            this.message = "Your account is blocked. You can't log in.";
          }
        }
        );
  }

  public onOk() {
    this.router.navigate(['/home']);
  }

  public registration() {
    this.router.navigate(['/registration']);
  }

  forgotPassword(){
    let user = new SurveyUser();
    user.email = this.email;
    this.userService.forgotPassword(user).subscribe(
      (data) => { console.log(data); },
      (error) => { console.log(error); }
    );
  }

}