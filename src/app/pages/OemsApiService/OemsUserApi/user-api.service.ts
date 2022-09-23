import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  baseUrl="http://13.126.166.223:9999";

  constructor(private http:HttpClient) { }

  saveUser(user:any){
    return this.http.post(`${this.baseUrl}/user/`,user);
  }


  // Login user credentials...
  
  getOemsSignInToken(signInUser:any){
    return this.http.post(`${this.baseUrl}/generate-token`,signInUser)
  }

  getUser(username:any){
    return this.http.get(`${this.baseUrl}/user/${username}`)
  }



} 
