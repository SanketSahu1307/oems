import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthServiceService } from 'src/app/pages/OemsApiService/OemsUserAuthentication/user-auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  
  constructor(private auth:UserAuthServiceService) { }


  ngOnInit(): void {
    this.auth.oemsUserLogout();
  }

  

}
