import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCloudFirestoreComponent } from './firebase-cloud-firestore.component';

describe('FirebaseCloudFirestoreComponent', () => {
  let component: FirebaseCloudFirestoreComponent;
  let fixture: ComponentFixture<FirebaseCloudFirestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseCloudFirestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseCloudFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
