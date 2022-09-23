import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminComponentApiService } from 'src/app/pages/OemsApiService/oemsComponentApi/admin-component-api.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  constructor(private categoryServ:AdminComponentApiService,private route:Router) { }

  ngOnInit(): void {
  }

   categoryList=new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required])
  })

  createCategory(){
    console.log(this.categoryList.value);
    this.route.navigate(['adminDashboard/Santosh@123/(adminprofile:addCategories)']);
    this.categoryServ.addCategoryUrl(this.categoryList.value).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err);
      
    })
  }

}
