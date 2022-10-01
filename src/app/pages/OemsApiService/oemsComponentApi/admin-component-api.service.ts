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

  getQuizzes(){
    return this.http.get(`${this.baseUrl}/quiz/`)
  }

  getCategoryById(id:any){
    return this.http.get(`${this.baseUrl}/category/${id}`);
  }

  updateCategory(data:any){
     return this.http.put(`${this.baseUrl}/category/`,data);
  }

  deleteCatory(id:any){
    return this.http.delete(`${this.baseUrl}/category/${id}`)
  }

}
