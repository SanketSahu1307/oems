import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeStoreComponent } from './fake-store.component';

describe('FakeStoreComponent', () => {
  let component: FakeStoreComponent;
  let fixture: ComponentFixture<FakeStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
