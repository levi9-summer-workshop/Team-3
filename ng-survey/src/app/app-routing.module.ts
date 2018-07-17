
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SurveyUserListComponent } from './survey-user-list/survey-user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: "user", component: SurveyUserListComponent}
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
