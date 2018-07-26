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

   this.loginService.login(form.value.username, form.value.password) .subscribe(
    (data) => {this.user = data;
      this.lgdin = true;
      this.message = "Success!";
      form.reset();
     },
    (error) => {
      this.error = error;
     }
  );
<<<<<<< HEAD
    
=======
       
>>>>>>> e17b7a5a1bc9e945abe047ad8688008c0107bbf0
}

  public onOk() {
    this.router.navigate(['/home']);
  }

}