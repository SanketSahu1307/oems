import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthServiceService } from '../OemsUserAuthentication/user-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {

  constructor(private userGuard:UserAuthServiceService,private route:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if (this.userGuard.isOemsUserLogin()) {
        return true
      } else {
        return false
      }
    }
  
}
