

import { Survey } from "./survey.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FilledSurveyModel } from "../../survey-fill/filled-survey-models/filled-survey-model";

@Injectable()
export class SurveyCreatePageServiceService {

  constructor(private http: HttpClient) { }

  post(survey : Survey) : Observable<any>{
    return this.http.post("//localhost:8080/survey", survey);
  }
  get(): Observable<any>{
    return this.http.get("//localhost:8080/survey");
  }
  getById(id : number) : Observable<any>{
    return this.http.get("//localhost:8080/survey/"+id);
  }
  delete(id : number) : Observable<any>{
    return this.http.delete("//localhost:8080/survey/"+id);
  }
  postSubmitedSurvey(survey : FilledSurveyModel) : Observable<any>{
    return this.http.post("//localhost:8080/survey/filled", survey);
  }
}
