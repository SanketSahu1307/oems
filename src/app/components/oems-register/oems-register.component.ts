import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/pages/OemsApiService/OemsUserApi/user-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-oems-register',
  templateUrl: './oems-register.component.html',
  styleUrls: ['./oems-register.component.css']
})
export class OemsRegisterComponent implements OnInit {

  hide=true;
  signUp=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required]),
  })
  constructor(private oemsService:UserApiService) { } 
  ngOnInit(): void {
    
  }

  oemsRegister(){
    this.oemsService.saveUser(this.signUp.value).subscribe(res=>{
      console.log("success"),
      Swal.fire('Successfully Registered.','Thankyou you... Welcome to Career Infotech OEMS','success'); 
    },
      err=>{
        console.log("error raised..",err);
        Swal.fire('Something Went Wrong.','Please try sometime later...Sorry','error');
      }
    );
    
    // console.log("hello user calling");
    console.log(this.signUp.value);
  }

}
