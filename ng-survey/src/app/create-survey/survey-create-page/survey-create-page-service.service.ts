

import { Survey } from "../../survey/survey.model";
import { HttpClient } from "../../../../node_modules/@angular/common/http";
import { Injectable } from "../../../../node_modules/@angular/core";
import { Observable } from "../../../../node_modules/rxjs/Observable";

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
  
}
