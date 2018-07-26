import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginServiceService) { }

  ngOnInit() {
  }

}
