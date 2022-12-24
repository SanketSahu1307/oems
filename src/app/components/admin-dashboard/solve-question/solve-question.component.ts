import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminComponentApiService } from 'src/app/pages/OemsApiService/oemsComponentApi/admin-component-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solve-question',
  templateUrl: './solve-question.component.html',
  styleUrls: ['./solve-question.component.css']
})
export class SolveQuestionComponent implements OnInit {
 num:number =0;
  ans: any;

  constructor(private quizServ:AdminComponentApiService,private activeRoute:ActivatedRoute,private formBuilder:FormBuilder) { }

  id:any;
  questions:any;

  questionUpdateList = this.formBuilder.group({
    question_id: ['',Validators.required],
    content: ['', Validators.required],
    option1: ['', Validators.required],
    option2: ['', Validators.required],
    option3: ['', Validators.required],
    option4: ['', Validators.required],
    answer: ['', Validators.required],
    
  })

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id'];
    this.getAllQuestionOfQuizzesId();

  }

  

  getAllQuestionOfQuizzesId(){
    this.quizServ.getQuestionByQuizId(this.id).subscribe(res=>{
      this.questions=res;
      for (let i = 0; i < this.questions.length; i++) {
        this.ans=this.questions[i].givenAnswer;
        // console.log(this.ans);
        
      }
      console.log(this.questions);
      
    },err=>{
      console.log(err);
      
    })
  }


  QuestionById(QuestionId:any) {

    this.quizServ.getQuestionByQuestionId(QuestionId).subscribe((res: any) => {
      this.questionUpdateList = new FormGroup<any>({
        question_id: new FormControl(res['question_id']),
        content: new FormControl(res['content']),
        option1: new FormControl(res['option1']),
        option2: new FormControl(res['option2']),
        option3: new FormControl(res['option3']),
        option4: new FormControl(res['option4']),
        answer: new FormControl(res['answer']),
        quiz:new FormControl(res.quiz)
      })
      console.log(res);

    }, err => {
      console.log(err);

    })



  }

  deleteQuestionById(QuestionId:any){


    Swal.fire({
      title: "Do you Really want to Delete?",
      showDenyButton: true,
      confirmButtonText: 'DELETE',
      denyButtonText: 'CANCEL'
    }).then(result => {
      if (result.isConfirmed) {
        this.quizServ.deleteQuestionById(QuestionId).subscribe(res => {
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

  updateQuestion(){
    this.quizServ.putQuestion(this.questionUpdateList.value).subscribe(res=>{
      Swal.fire('Successfully update Done.', '', 'success')
      location.reload();
      console.log(res);
      
      
    },err=>{
      Swal.fire('Something Went Wrong.','', 'error')
    })
    

  }

}
