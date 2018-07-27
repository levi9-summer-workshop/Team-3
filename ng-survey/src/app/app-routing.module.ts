
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { SurveyUserListComponent } from './survey-user-list/survey-user-list.component';
import { RegistrationComponent } from './templates/registration/registration.component';
import { HomeComponent } from './templates/home/home.component';
import { LoginComponent } from './templates/login/login.component';
import { SurveyCreatePageComponent } from './create-survey/survey-create-page/survey-create-page.component';
import { FillSurveyComponent } from './survey-fill/fill-survey/fill-survey.component';
import { AllSurveysComponent } from './survey-fill/all-surveys/all-surveys.component';
import { SurveyResultsComponent } from './survey-fill/survey-results/survey-results.component';
import { AccessForbidenComponent } from './errors/access-forbiden/access-forbiden.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LogOutComponent } from './templates/log-out/log-out.component';
import { UsersSurveysComponent } from './survey-fill/users-surveys/users-surveys.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: "survey", component: SurveyCreatePageComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "users", component: SurveyUserListComponent },
  { path: "new-survey", component: SurveyCreatePageComponent },
  { path: "login", component: LoginComponent },
  { path: "your-surveys/:id", component : UsersSurveysComponent},
  { path : "surveys/:id", component :  FillSurveyComponent },
  { path : "all-surveys", component : AllSurveysComponent },
  { path: "survey-results/:id", component : SurveyResultsComponent },
  { path: "404", component : NotFoundComponent },
  { path: "forbidden",  component : AccessForbidenComponent},
  { path: "logout", component : LogOutComponent }
  
];


@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes, { useHash: true })]
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
