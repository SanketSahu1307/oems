import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

  getCategoryById(id:any){
    return this.http.get(`${this.baseUrl}/category/${id}`);
  }

  updateCategory(data:any){
     return this.http.put(`${this.baseUrl}/category/`,data);
  }

  deleteCatory(id:any){
    return this.http.delete(`${this.baseUrl}/category/${id}`)
  }

  getQuizzes(){
    return this.http.get(`${this.baseUrl}/quiz/`)
  }

  postQuizzes(quizzes:any){
    return this.http.post(`${this.baseUrl}/quiz/`,quizzes)
  }

  deleteQuiz(id:any){
    return this.http.delete(`${this.baseUrl}/quiz/${id}`)
  }

  getQuizById(id:any){
    return this.http.get(`${this.baseUrl}/quiz/${id}`)
  }

  updateQuiz(quizzes:any){
    return this.http.put(`${this.baseUrl}/quiz/`,quizzes)
  }

  public sendQuizId=new Subject<any>();

  postQuestion(questions:any){
    return this.http.post(`${this.baseUrl}/question/`,questions)
  }

  getQuestionByQuizId(id:any){
    return this.http.get(`${this.baseUrl}/question/quiz/${id}`)
  }

  getQuestionByQuestionId(id:any){
    return this.http.get(`${this.baseUrl}/question/${id}`);
  }

  putQuestion(questions:any){
    return this.http.post(`${this.baseUrl}/question/`,questions)
  }

  deleteQuestionById(id:any){
    return this.http.delete(`${this.baseUrl}/question/${id}`)
  }

}
