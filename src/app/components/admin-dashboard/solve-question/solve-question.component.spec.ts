import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { SolveQuestionComponent } from './solve-question.component';

describe('SolveQuestionComponent', () => {
  let component: SolveQuestionComponent;
  let fixture: ComponentFixture<SolveQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolveQuestionComponent ],
      imports: [HttpClientModule,ActivatedRoute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolveQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
