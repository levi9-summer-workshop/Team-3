import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login/login-service.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    // location.reload();
    // this.router.navigate(['login']);
    
  }

}
