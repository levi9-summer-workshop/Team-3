import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EqualValidator } from './templates/registration/equal-validator.directive';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { LoginComponent } from './templates/login/login.component';
import { FormsModule } from '@angular/forms';
import { SurveyUserComponent } from './survey-user/survey-user.component';
import { HttpClientModule } from '@angular/common/http';
import { SurveyUserService } from './survey-user/survey-user.service';
import { SurveyUserListComponent } from './survey-user-list/survey-user-list.component';
import { SurveyAnswerComponent } from './create-survey/survey-answer/survey-answer.component';
import { SurveyQuestionComponent } from './create-survey/survey-question/survey-question.component';
import { RegistrationComponent } from './templates/registration/registration.component';
import { RegistrationService } from './templates/registration/registration.service';
import { HomeComponent } from './templates/home/home.component';
import { SurveyCreatePageServiceService } from './create-survey/survey-create-page/survey-create-page-service.service';
import { SurveyCreatePageComponent } from './create-survey/survey-create-page/survey-create-page.component';
import { FillQuestionComponent } from './survey-fill/fill-question/fill-question.component';
import { FillSurveyComponent } from './survey-fill/fill-survey/fill-survey.component';
import { AllSurveysComponent } from './survey-fill/all-surveys/all-surveys.component';


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
    RegistrationComponent,
    EqualValidator,
    HomeComponent,
    FillQuestionComponent,
    FillSurveyComponent,
    AllSurveysComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
    SurveyUserService,
    SurveyCreatePageServiceService,
    RegistrationService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }