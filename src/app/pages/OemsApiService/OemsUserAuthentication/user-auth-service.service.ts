import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthServiceService {

  constructor(private route:Router) { 
    
  console.log(this.isUserLoggedIn());
  }

  isLogin=localStorage.getItem('token');
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

  

}
