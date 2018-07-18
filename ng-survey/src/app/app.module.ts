import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SurveyUserComponent } from './survey-user/survey-user.component';
import { HttpClientModule } from '@angular/common/http';
import { SurveyUserService } from './survey-user/survey-user.service';
import { SurveyUserListComponent } from './survey-user-list/survey-user-list.component';
import { SurveyCreatePageComponent } from './survey-create-page/survey-create-page.component';
import { SurveyAnswerComponent } from './survey-answer/survey-answer.component';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SurveyUserComponent,
    SurveyUserListComponent,
    SurveyCreatePageComponent,
    SurveyAnswerComponent,
    SurveyQuestionComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SurveyUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
