

import { Survey } from "./survey.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FilledSurveyModel } from "../../survey-fill/filled-survey-models/filled-survey-model";
import { LoginServiceService } from "../../templates/login/login-service.service";

@Injectable()
export class SurveyCreatePageServiceService {

  constructor(private http: HttpClient, public loginService: LoginServiceService) { }
  post(survey : Survey) : Observable<any>{
   
    return this.http.post("//localhost:8080/survey",  survey, { headers : this.loginService.getAuthHeaders() } );
  }
  get(): Observable<any>{
    return this.http.get("//localhost:8080/survey", { headers : this.loginService.getAuthHeaders() } );
  }
  getById(id : number) : Observable<any>{
    return this.http.get("//localhost:8080/survey/"+id,  { headers : this.loginService.getAuthHeaders() } );
  }
  delete(id : number) : Observable<any>{
    return this.http.delete("//localhost:8080/survey/"+id,  { headers : this.loginService.getAuthHeaders() } );
  }
  postSubmitedSurvey(survey : FilledSurveyModel) : Observable<any>{
    return this.http.post("//localhost:8080/survey/filled", survey,  { headers : this.loginService.getAuthHeaders() } );
  }
  getSurveysByUserId(id: number) : Observable<any>{
    return this.http.get("//localhost:8080/survey/get/"+id, { headers : this.loginService.getAuthHeaders() } );
  }
}