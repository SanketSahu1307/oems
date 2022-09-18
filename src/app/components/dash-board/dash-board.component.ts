import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/pages/OemsApiService/OemsUserApi/user-api.service';
import { UserAuthServiceService } from 'src/app/pages/OemsApiService/OemsUserAuthentication/user-auth-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  name: any;

  constructor(private userDashHttp:UserApiService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activeRoute.snapshot.params['name'];
    this.userApiData()
  }

  userApiData(){
    this.userDashHttp.getUser(this.name).subscribe(resp=>{
      console.log(resp);
    },error=>{
      console.log(error);
    })
  }

}
