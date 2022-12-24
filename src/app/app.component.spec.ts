import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { __values } from 'tslib';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});


// Testing
// There are two types of testing i.e. 1) Manual Testing and 2) Automated Testing:
// Manual Testing are the testing that we done manual by using console,putting manual __values,etc.
// Automated Testing are the testing which done by itself by our written testing code.
// In Automated Testing we do three types of testing i.e.
// 1)Unit Testing : By unit testing, we do just single logic testing in isolation.
//   E.g.Pipes Testing,directives testing,class,component,service testing.
// 2)Integration Testing : It is little complex testing.this testing is done with more than one LoginAuthGuard,
//   it can be template and component combined testig or parent and child combined testing.
//   a) shallow test : we only test a component with its templates.
//   b) deep test : we test many component with its child component also with services.
// 3)E2E Testing : this testing usally done in live running browser.

// Mocking : helps us to give dummy data 
// Types:
// 1) Dummies : we create Dummy class or object and pass dummy data
// 2) Stubs : it has control over class, object and data.
// 3) Spies : it act as spy in our app by check how many times run or called, etc.