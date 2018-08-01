import { Component, OnInit } from '@angular/core';
import { AuthUser, LoginServiceService } from '../templates/login/login-service.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

public user : AuthUser;

  constructor(private service : LoginServiceService , private router: Router) { }

  ngOnInit() {

    if(!this.service.isUserAuth()){
      this.router.navigate(['login']);
      return;
    }
    this.user = this.service.getAuthUser();
  }

}
