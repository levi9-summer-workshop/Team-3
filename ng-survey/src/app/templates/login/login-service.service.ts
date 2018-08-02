import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { Router } from '../../../../node_modules/@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

  export class AuthUser{
    id : number;
    username: string;
    roles: string[];
    email : string;
    emailConfirmed: boolean;
    blocked: boolean;
  }

@Injectable()
export class LoginServiceService {

    user: AuthUser;
    private authenticated = false;
    private headers;

    constructor(private http : HttpClient, private router : Router) { }

    login(username: string, password: string){
      this.user = new AuthUser();
      const base64Credential = btoa(username + ':' + password);
      const headers = new HttpHeaders({ authorization: 'Basic ' + base64Credential});

    return this.http.get<any>("http://localhost:8080/auth/user", {headers : headers}).do(data =>{
        this.user = data;
        this.headers = headers;
        this.authenticated = true;
    });
    }

    public getAuthHeaders(){
      return this.headers;
    }

    public getAuthUser(){
      return this.user;
    }

    public isUserAuth(){
      return this.authenticated;
    }

   hasRoleAdmin() {
     if(this.user != null && this.user.roles != null){
      if (this.user) {
       return this.user.roles.includes('ROLE_ADMIN');
       }
      }
    }

    logout() {
      this.authenticated = false;
      this.user = null;
      this.headers = null;
      this.router.navigate(['/login']);
    }
  }