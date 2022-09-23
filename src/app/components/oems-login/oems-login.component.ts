import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/pages/OemsApiService/oemsUserApi/user-api.service';
import { UserAuthServiceService } from 'src/app/pages/OemsApiService/OemsUserAuthentication/user-auth-service.service';
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
  token:any;
  userAuthorityName:any;

  constructor(private oemService:UserApiService,private route:Router,private isAdmin:UserAuthServiceService) { }

  ngOnInit(): void {
  }


  oemsSignIn(){
    this.oemService.getOemsSignInToken(this.signIn.value).subscribe(
      res=>{
        this.token=res
        localStorage.setItem('token',this.token.token);
        Swal.fire('Login Successfully.','Thankyou you... Welcome to Career Infotech OEMS','success');

        this.oemService.getUser(this.signIn.controls["username"].value).subscribe(
          res=>{
            this.userAuthorityName=res
            console.log(this.userAuthorityName.authorities[0].authority);
            if(this.userAuthorityName.authorities[0].authority=='NORMAL'){
              this.route.navigate(['dashboard',this.signIn.controls['username'].value])
              // this.isAdmin.isAdmin(true);
            }else if (this.userAuthorityName.authorities[0].authority=='ADMIN') {
              // console.log("admin run");
              
              this.route.navigate(['adminDashboard',this.signIn.controls['username'].value])
              // this.isAdmin.isAdmin(false);
            }
            else{
              this.route.navigate(['login']);
              Swal.fire('User Not Found','Please Enter Valid Data','error');
            }
             
          },err=>{
            Swal.fire('USer Not Found','Please Enter Valid Data'+err,'error');
          }
        )

        
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
