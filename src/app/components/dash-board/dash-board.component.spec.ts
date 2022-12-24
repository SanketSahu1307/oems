import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/pages/OemsApiService/oemsUserApi/user-api.service';

import { DashBoardComponent } from './dash-board.component';

describe('DashBoardComponent', () => {
  let component: DashBoardComponent;
  let fixture: ComponentFixture<DashBoardComponent>;

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardComponent ],
      imports: [HttpClientModule],
      providers: [ {provide: ActivatedRoute, useValue: {
        snapshot: {
          queryParamMap: {
            get(): number {
              return 6;
            }
          }
        }
      }} ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
