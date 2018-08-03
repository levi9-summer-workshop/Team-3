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
import { FillSurveyComponent } from './survey-fill/fill-survey/fill-survey.component';
import { AllSurveysComponent } from './survey-fill/all-surveys/all-surveys.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SurveyResultsComponent } from './survey-fill/survey-results/survey-results.component';
import { LoginServiceService } from './templates/login/login-service.service';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AccessForbidenComponent } from './errors/access-forbiden/access-forbiden.component';
import { LogOutComponent } from './templates/log-out/log-out.component';
import { UsersSurveysComponent } from './survey-fill/users-surveys/users-surveys.component';
import { SharedSurveyComponent } from './survey-fill/shared-survey/shared-survey.component';
import { AccountComponent } from './account/account.component';
import {RecaptchaModule} from 'ng-recaptcha';

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
    FillSurveyComponent,
    AllSurveysComponent,
    SurveyResultsComponent,
    NotFoundComponent,
    AccessForbidenComponent,
    LogOutComponent,
    UsersSurveysComponent,
    SharedSurveyComponent,
    AccountComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RecaptchaModule.forRoot()
  ],

  providers: [
    SurveyUserService,
    SurveyCreatePageServiceService,
    RegistrationService,
    LoginServiceService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }