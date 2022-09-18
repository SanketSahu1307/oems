import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/pages/OemsApiService/OemsUserApi/user-api.service';
import Swal from 'sweetalert2';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-oems-login',
  templateUrl: './oems-login.component.html',
  styleUrls: ['./oems-login.component.css']
})
export class OemsLoginComponent implements OnInit {


  hide=true;
  signIn=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  }) 
  token:any

  constructor(private oemService:UserApiService,private route:Router) { }

  ngOnInit(): void {
  }


  oemsSignIn(){
    this.oemService.getOemsSignInToken(this.signIn.value).subscribe(
      res=>{
        this.token=res
        localStorage.setItem('token',this.token.token);
        Swal.fire('Login Successfully.','Thankyou you... Welcome to Career Infotech OEMS','success');
        this.route.navigate(['dashboard',this.signIn.controls['username'].value])
      },err=>{
        console.log("something went wrong...",err);
        Swal.fire('Something Went Wrong.','Please try sometime later...Sorry','error');
      }
    )
  }

  getUserDataByName(){
    this.oemService.getUser(this.signIn.controls['username'].value).subscribe(
      res=>{
        console.log(res);
      },err=>{
        console.log("user not found, Something went wrong",err);
      }
    )
  }

}
