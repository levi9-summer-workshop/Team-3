
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SurveyUserListComponent } from './survey-user-list/survey-user-list.component';
import { SurveyCreatePageComponent } from './survey-create-page/survey-create-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { SurveyUserComponent } from './survey-user/survey-user.component';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';


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
