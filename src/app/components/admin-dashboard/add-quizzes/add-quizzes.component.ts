import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminComponentApiService } from 'src/app/pages/OemsApiService/oemsComponentApi/admin-component-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.css']
})
export class AddQuizzesComponent implements OnInit {

  categoryId:any;


  constructor(private quizServ:AdminComponentApiService,private activeRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
  }

  quizzesList=new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    maxMarks:new FormControl('',[Validators.required]),
    numberOfQuestions: new FormControl('',[Validators.required]),
    active: new FormControl('',Validators.required),
    // category:new FormControl(this.quizServ.getCategoryById(this.activeRoute.snapshot.params['categoryId']))
  })

  addQuizzesList(){
    console.log(this.quizzesList.value);
    console.log(this.activeRoute.snapshot.params['categoryId']);
    
    this.quizServ.postQuizzes(this.quizzesList.value).subscribe(res=>{
      console.log(res);
      Swal.fire('Successfully Added Quizzes','Lets add question','success');
      this.route.navigate(['../../quizzes'],{relativeTo:this.activeRoute})
    },err=>{
      Swal.fire("Oops! Something Went Wrong...",'Please try again','error')
      console.log(err);
    })
    
  }

}
