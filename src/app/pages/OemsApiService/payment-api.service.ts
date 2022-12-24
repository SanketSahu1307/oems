import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

function getWindow():any{
  return window;
}

@Injectable({
  providedIn: 'root'
})


export class PaymentApiService {
  

  constructor(private http:HttpClient) { }

  get nativeWindow():any{
    return getWindow();
  }


  getHello(){
   return this.http.get(`http://localhost:8080/hello`);
  }

  createOrder(payment:any){
    return this.http.post(`http://localhost:8080/payment`,payment)
  }

}
