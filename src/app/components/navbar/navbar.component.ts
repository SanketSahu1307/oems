import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthServiceService } from 'src/app/pages/OemsApiService/OemsUserAuthentication/user-auth-service.service';
import { LoginAuthGuard } from 'src/app/pages/OemsApiService/OemsUserGuard/login-auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:UserAuthServiceService,private activRoute:ActivatedRoute) { }

  isLogout=this.auth.isUserLoggedIn();
 
  // loginLogout:any;
  ngOnInit(): void {
    
  }


  // isUserLogout(){
  //   if (this.isLogout==true) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  

}
