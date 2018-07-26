import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private loginService : LoginServiceService) { }

  ngOnInit() {
    if(!this.loginService.isUserAuth()){
      this.router.navigate(['login']);
      return;
    }
  }

  onNew() {
    this.router.navigate(['/new-survey']);
  }

  onManage() {
    this.router.navigate(['/home']);
  }

  onAll() {
    this.router.navigate(['/all-surveys']);
  }
}
