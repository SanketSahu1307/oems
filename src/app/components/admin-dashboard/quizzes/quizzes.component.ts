import { Component, OnInit } from '@angular/core';
import { AdminComponentApiService } from 'src/app/pages/OemsApiService/oemsComponentApi/admin-component-api.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private quizServ:AdminComponentApiService) { }

  quizDetail:any;

  ngOnInit(): void {
    this.viewQuizzes();
  }

  viewQuizzes(){
    this.quizServ.getQuizzes().subscribe(res=>{
      this.quizDetail=res
      console.log(this.quizDetail);
    },err=>{
      console.log(err);
    })
  }
 
}
