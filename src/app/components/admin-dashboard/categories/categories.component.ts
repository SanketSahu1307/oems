import { Component, OnInit } from '@angular/core';
import { AdminComponentApiService } from 'src/app/pages/OemsApiService/oemsComponentApi/admin-component-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private httpService:AdminComponentApiService) { }

  categories:any;

  ngOnInit(): void {
    this.getCategoriesData()
  }
  

  getCategoriesData(){
    this.httpService.getAllCategoryUrl().subscribe(res=>{
      this.categories=res;
    },err=>{
      console.log(err);
      
    })
  }

}
