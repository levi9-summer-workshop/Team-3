import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SurveyUser } from '../survey-user/survey-user.model';

@Injectable()
export class RegistrationService {

  user: SurveyUser;

  constructor(private http: HttpClient) { }

  post(user: SurveyUser): Observable<any> {
    return this.http.post("//localhost:8080/user/register", user);
  }
}
