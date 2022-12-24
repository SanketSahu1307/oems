import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OemsLoginComponent } from './oems-login.component';

describe('OemsLoginComponent', () => {
  let component: OemsLoginComponent;
  let fixture: ComponentFixture<OemsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OemsLoginComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OemsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
