import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/pages/OemsApiService/oemsUserApi/user-api.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  name: any;
  userDetails:any

  constructor(private userDashHttp:UserApiService,private activeRoute:ActivatedRoute) { }

 
  ngOnInit(): void {
    this.name = this.activeRoute.snapshot.params['name'];
    console.log(this.name);
    this.userApiData()
  }

  userApiData(){
    this.userDashHttp.getUser(this.name).subscribe(resp=>{
      this.userDetails = resp;
      console.log(this.userDetails);
      console.log(this.userDetails.profile);
      
    },error=>{
      console.log(error);
    })
  }

}
