import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { SurveyUser } from '../survey-user/survey-user.model';

@Injectable()
export class RegistrationService {

  user: SurveyUser;

  constructor(private http: HttpClient) { }

  post(user: SurveyUser): Observable<any> {
    return this.http.post("//localhost:8080/user/register", user);
  }
}
