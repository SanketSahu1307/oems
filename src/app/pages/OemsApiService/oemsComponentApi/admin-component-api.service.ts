import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminComponentApiService {

  baseUrl="http://13.126.166.223:9999";

  constructor(private http:HttpClient) { }

  getAllCategoryUrl(){
   return this.http.get(`${this.baseUrl}/category/`);
  }

  addCategoryUrl(categoryList:any){
    return this.http.post(`${this.baseUrl}/category/`,categoryList)
  }

}
