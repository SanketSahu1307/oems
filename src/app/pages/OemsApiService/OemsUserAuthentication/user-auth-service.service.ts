import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../oemsUserApi/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  constructor(private route:Router) { 
    
  } 

  isLogin=localStorage.getItem('token');
  isAdminUser:any
  isOemsUserLogin(){
    if (this.isLogin=='' || this.isLogin==null || this.isLogin==undefined) {
      return false;
    } else {
      return true;
    }  
    
  }

  oemsUserLogout(){
    localStorage.removeItem('token');
    this.route.navigate(['']);
  }
 
  isUserLoggedIn() {
    let user = localStorage.getItem('token')
    return !(user === null)
  }

  isAdmin(data:boolean){
    this.isAdminUser=data;
  }

  

}
