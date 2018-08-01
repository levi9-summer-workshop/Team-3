import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SurveyUser } from './survey-user.model';
import { LoginServiceService } from '../templates/login/login-service.service';

@Injectable()
export class SurveyUserService {

  constructor(private http: HttpClient, public loginService: LoginServiceService) { }
  
  get(): Observable<any>{
    return this.http.get("//localhost:8080/user",  { headers : this.loginService.getAuthHeaders() } );
  }

  post(user: SurveyUser) : Observable<any>{
    return this.http.post("//localhost:8080/user", user,  { headers : this.loginService.getAuthHeaders() } );
  }

  block(user: SurveyUser) : Observable<any>{
    return this.http.put("//localhost:8080/user/block", user,  { headers : this.loginService.getAuthHeaders() } );
  }

  delete(userId: number) {
    return this.http.delete("//localhost:8080/user/" + userId,  { headers : this.loginService.getAuthHeaders() } );
  }

  changePassword(user : SurveyUser) : Observable<any>{
    return this.http.put("//localhost:8080/user/change-password", user, { headers : this.loginService.getAuthHeaders() } );
  }
}