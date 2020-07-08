import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseSharedComponent } from './firebase-shared.component';

describe('FirebaseSharedComponent', () => {
  let component: FirebaseSharedComponent;
  let fixture: ComponentFixture<FirebaseSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
