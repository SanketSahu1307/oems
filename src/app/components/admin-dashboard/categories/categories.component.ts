import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminComponentApiService } from 'src/app/pages/OemsApiService/oemsComponentApi/admin-component-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private httpService:AdminComponentApiService) { }
  

  categories:any;
  categoryByIdData:any;

  ngOnInit(): void { 
    this.getCategoriesData();
  }

  categoryUpdateList=new FormGroup({
    category_id:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required])
  })

  
  

  getCategoriesData(){
    this.httpService.getAllCategoryUrl().subscribe(res=>{
      this.categories=res;
      
    },err=>{
      console.log(err);
    })
  }

  getCategoryById(id:any){

    this.httpService.getCategoryById(id).subscribe((res:any)=>{
      this.categoryUpdateList=new FormGroup({
        category_id:new FormControl(res['category_id']),
        title:new FormControl(res['title']),
        description:new FormControl(res['description'])
      })
      console.log(res);
      
    },err=>{
      console.log(err);
      
    })
  }

  updateCategory(){
    this.httpService.updateCategory(this.categoryUpdateList.value).subscribe(res=>{
      window.location.reload();
    },err=>{
      console.log(err);
      
    })
  }

  deleteCategoryById(id:any){

    Swal.fire({
      title:"Do you Really want to Delete?",
      showDenyButton:true,
      confirmButtonText:'DELETE',
      denyButtonText:'CANCEL'
    }).then(result=>{
      if (result.isConfirmed) {
        this.httpService.deleteCatory(id).subscribe(res=>{
          console.log(res);
          Swal.fire('Successfully Deleted','','success').then(respon=>{
            window.location.reload();
        });
        },err=>{
          console.log(err);
          Swal.fire('Something gone Wrong','Please try later','warning');
        })
      } else {
        Swal.fire('Changes are Cancel','','info');
      }
    })

   
  }

}
