import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService, AuthUser } from './login-service.service';
import { THIS_EXPR } from '../../../../node_modules/@angular/compiler/src/output/output_ast';

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
  
  constructor(private loginService : LoginServiceService, private router: Router) { }

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
          this.user = data;
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
        }
        );
  }

  public onOk() {
    this.router.navigate(['/home']);
  }

  public registration() {
    this.router.navigate(['/registration']);
  }
}