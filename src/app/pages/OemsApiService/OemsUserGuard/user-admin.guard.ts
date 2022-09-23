import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthServiceService } from '../OemsUserAuthentication/user-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserAdminGuard implements CanActivate {

  constructor(private userServ:UserAuthServiceService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true
  }
  
}
