import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseRealTimedataComponent } from './firebase-real-timedata.component';

describe('FirebaseRealTimedataComponent', () => {
  let component: FirebaseRealTimedataComponent;
  let fixture: ComponentFixture<FirebaseRealTimedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseRealTimedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseRealTimedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
