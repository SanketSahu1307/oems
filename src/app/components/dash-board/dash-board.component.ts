import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/pages/OemsApiService/oemsUserApi/user-api.service';
import { UserAuthServiceService } from 'src/app/pages/OemsApiService/OemsUserAuthentication/user-auth-service.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  @Input()
  name: any;
  userDetails:any

  // patientInformation=  {
  //   dob: "2010-05-20T12:33:52.119Z",
  //   firstName: "CHRISTOPHER",
  //   lastName: "LEWIS",
  //   gender: "M",
  //   note: "Some notes",
  //   patientId: "PT9904",
  // };

  constructor(private userDashHttp:UserApiService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void { 
    this.name = this.activeRoute.snapshot.params['name'];
    this.userApiData()
  }

  userApiData(){
    this.userDashHttp.getUser(this.name).subscribe(resp=>{
      this.userDetails = resp;
      
    },error=>{
      console.log(error);
    })
  }

}
