import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminComponentApiService } from 'src/app/pages/OemsApiService/oemsComponentApi/admin-component-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private quizServ: AdminComponentApiService,
    private route:Router,private activeRoute:ActivatedRoute,) { }

  quizDetail: any;

  ngOnInit(): void {
    this.viewQuizzes();
  }

  quizzesUpdateList = new FormGroup({
    category_id: new FormControl(),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required),
    numberOfQuestions: new FormControl('', [Validators.required]),
    maxMarks: new FormControl('', [Validators.required]),
    active: new FormControl('')
  })

  viewQuizzes() {
    this.quizServ.getQuizzes().subscribe(res => {
      this.quizDetail = res
      console.log(this.quizDetail);
    }, err => {
      console.log(err);
    })
  }

  deleteQuizById(id: any) {

    Swal.fire({
      title: "Do you Really want to Delete?",
      showDenyButton: true,
      confirmButtonText: 'DELETE',
      denyButtonText: 'CANCEL'
    }).then(result => {
      if (result.isConfirmed) {
        this.quizServ.deleteQuiz(id).subscribe(res => {
          console.log(res);
          Swal.fire('Successfully Deleted', '', 'success').then(respon => {
            window.location.reload();
          });
        }, err => {
          console.log(err);
          Swal.fire('Something gone Wrong', 'Please try later', 'warning');
        })
      } else {
        Swal.fire('Changes are Cancel', '', 'info');
      }
    })

  }

  QuizById(id: any) {

    this.quizServ.getQuizById(id).subscribe((res: any) => {
      this.quizzesUpdateList = new FormGroup<any>({
        category_id: new FormControl(res['category_id']),
        title: new FormControl(res['title']),
        description: new FormControl(res['description']),
        numberOfQuestions: new FormControl(res['numberOfQuestions']),
        maxMarks: new FormControl(res['maxMarks']),
        active: new FormControl(res['active'])
      })
      console.log(res);

    }, err => {
      console.log(err);

    })


    console.log(id);

  }

  updateQuizzes() {
    this.quizServ.updateQuiz(this.quizzesUpdateList.value).subscribe(res=>{
      Swal.fire('Successfully Updated','','success').then(res=>{
        window.location.reload();
      })
      console.log(res);
      
    },err=>{
      Swal.fire('Something Went Wrong','Please try later','error');
    })

  }

  

  moveToQuestion(id: any) {
    this.route.navigate(['../question/',id],{relativeTo:this.activeRoute});
    this.quizServ.getQuizById(id).subscribe((res:any)=>{
      this.quizDetail=res
      console.log(res);
      
      this.quizServ.sendQuizId.next(this.quizDetail);
    },err=>{
      console.log(err);
    })
  }

  moveToSolvingQuiz(id:any){
    this.route.navigate(['../quiz/',id],{relativeTo:this.activeRoute})
  }

}
