import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OemsRegisterComponent } from './oems-register.component';

describe('OemsRegisterComponent', () => {
  let component: OemsRegisterComponent;
  let fixture: ComponentFixture<OemsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OemsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OemsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});