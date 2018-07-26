import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService, AuthUser } from './login-service.service';

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
  constructor(private loginService : LoginServiceService, private router: Router) { }

  ngOnInit() {

    this.user = new AuthUser();
    this.message = "Bad credentials!";
    this.username = "";
    this.password = "";
  }

  public takeLoginData(form: NgForm) {

   this.loginService.login(form.value.username, form.value.password) .subscribe(
    (data) => {this.user = data;
      this.message = "Success!";
     },
    (error) => {
      this.error = error;
     }
  );
       //form.reset();
}

  public onOk() {
    this.router.navigate(['/home']);
  }

}