import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/pages/OemsApiService/oemsUserApi/user-api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  name: any;
  userDetails:any

  constructor(private userDashHttp:UserApiService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activeRoute.snapshot.params['name'];
    this.userApiData()
  }

  
  userApiData(){
    this.userDashHttp.getUser(this.name).subscribe(resp=>{
      this.userDetails = resp;
      console.log(resp);
      console.log(this.userDetails.profile);
      
    },error=>{
      console.log(error);
    })
  }

}