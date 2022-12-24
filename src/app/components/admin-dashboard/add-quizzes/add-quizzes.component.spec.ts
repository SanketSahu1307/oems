import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { AddQuizzesComponent } from './add-quizzes.component';

describe('AddQuizzesComponent', () => {
  let component: AddQuizzesComponent;
  let fixture: ComponentFixture<AddQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuizzesComponent ],
      imports: [HttpClientModule,ActivatedRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
