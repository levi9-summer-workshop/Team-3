
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { SurveyUserListComponent } from './survey-user-list/survey-user-list.component';
import { RegistrationComponent } from './templates/registration/registration.component';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './templates/home/home.component';
import { LoginComponent } from './templates/login/login.component';
import { SurveyCreatePageComponent } from './create-survey/survey-create-page/survey-create-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: "user", component: SurveyUserListComponent},
  { path: "survey", component: SurveyCreatePageComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "users", component: SurveyUserListComponent },
  { path: "new-survey", component: SurveyCreatePageComponent },
  { path: "surveys", component: SurveyComponent },
  { path: "login", component: LoginComponent }
];


@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes, { useHash: false })]
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
