import { HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminComponentApiService } from 'src/app/pages/OemsApiService/oemsComponentApi/admin-component-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private questionServ: AdminComponentApiService, private formBuilder: FormBuilder,
    private activRoute: ActivatedRoute) {

  }
  quizId: any;
  quizType: any;
  ngOnInit(): void {
    this.quizId = this.activRoute.snapshot.params['id'];


    this.questionServ.sendQuizId.subscribe((res: any) => {
      this.quizType=res;
      this.addQuestionList.controls['quiz'].setValue(res)
      // console.log(this.addQuestionList.controls['quiz'].value);

    })
    console.log(this.quizId);

  }



  addQuestionList = this.formBuilder.group({
    quiz: [],
    content: ['', Validators.required],
    option1: ['', Validators.required],
    option2: ['', Validators.required],
    option3: ['', Validators.required],
    option4: ['', Validators.required],
    answer: ['', Validators.required]
  })

  addQuestionListForQuizzes() {
    this.quizId = this.activRoute.snapshot.params['id'];
    this.questionServ.getQuizById(this.quizId).subscribe((res: any) => {

      this.addQuestionList.controls['quiz'].setValue(res)
      // console.log(this.addQuestionList.controls['quiz'].value);
      // console.log(res);
      
      // console.log(this.addQuestionList.value);
      this.questionServ.postQuestion(this.addQuestionList.value).subscribe(res => {
        console.log(res);
        Swal.fire('Successfully Added question in Quiz Id', this.quizId, 'success').then(_res => {
          // window.location.reload();
          
        })
      }, err => {
        console.log(err);
      })


    }, err => {
      console.log(err);

    }
    )

  }



}
