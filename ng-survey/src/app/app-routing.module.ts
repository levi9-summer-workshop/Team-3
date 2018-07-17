
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAndLoginComponent } from './register-and-login/register-and-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RegisterAndLoginComponent }
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
