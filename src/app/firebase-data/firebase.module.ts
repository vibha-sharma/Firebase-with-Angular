import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FirebaseRealTimedataComponent } from './firebase-real-timedata/firebase-real-timedata.component';
import { FirebaseCloudFirestoreComponent } from './firebase-cloud-firestore/firebase-cloud-firestore.component';
import { FirebaseSharedComponent } from './firebase-shared/firebase-shared.component';

@NgModule({
  declarations: [
    FirebaseRealTimedataComponent,
    FirebaseCloudFirestoreComponent,
    FirebaseSharedComponent,
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FirebaseRealTimedataComponent,
    FirebaseCloudFirestoreComponent,
    FirebaseSharedComponent,
  ],
  providers: [],
})
export class FirebaseModule {}
