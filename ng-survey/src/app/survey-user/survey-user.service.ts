import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SurveyUser } from './survey-user.model';

@Injectable()
export class SurveyUserService {

  constructor(private http: HttpClient) { }

  get(): Observable<any>{
    return this.http.get("//localhost:8080/user");
  }

  post(user: SurveyUser):Observable<any>{
    return this.http.post("//localhost:8080/user", user);
  }

  block(user: SurveyUser):Observable<any>{
    return this.http.put("//localhost:8080/user/block", user);
  }

  delete(userId: number) {
    return this.http.delete("//localhost:8080/user" + '/' + userId);
  }
}