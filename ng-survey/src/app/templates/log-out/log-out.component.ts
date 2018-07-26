import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private service : LoginServiceService) { }

  ngOnInit() {
    this.service.logout();
  }

}
