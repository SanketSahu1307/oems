import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OemsLoginComponent } from './oems-login.component';

describe('OemsLoginComponent', () => {
  let component: OemsLoginComponent;
  let fixture: ComponentFixture<OemsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OemsLoginComponent ]
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
