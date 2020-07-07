import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

// Todo
import { items } from '../../item';

@Component({
  selector: 'app-firebase-real-timedata',
  templateUrl: './firebase-real-timedata.component.html',
  styleUrls: ['./firebase-real-timedata.component.less'],
})
export class FirebaseRealTimedataComponent implements OnInit {
  editIcon = faEdit;
  removeIcon = faTimes;
  // Todo Create
  getCourses: any = [];
  firebaseHeading: string = 'Realtime Database';
  titleHeading: string = 'Add Item in Realtime Database';
  itemCollection: any;
  coursesInfoForm;
  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder
  ) {
    this.itemCollection = db
      .list('courses')
      .snapshotChanges()
      .subscribe((result) => {
        console.log('result', result);
        result.map((result) => {
          this.getCourses.push({
            id: result.key,
            payload: result.payload.val(),
          });
        });
      });

    this.coursesInfoForm = this.formBuilder.group({
      name: '',
      title: '',
      price: 0,
    });
  }

  ngOnInit(): void {}
  addDetail(courseinfo) {
    this.db.database
      .ref('/courses')
      .push({ courseinfo })
      .then(() => {
        this.coursesInfoForm.reset();
        console.log('success');
      });
    this.getCourses = [];
  }
  removeDetail(event, data) {
    var adaRef = this.db.database.ref(`courses/${data.id}`);
    adaRef
      .remove()
      .then(function () {
        console.log('Remove succeeded.');
      })
      .catch(function (error) {
        console.log('Remove failed: ' + error.message);
      });
    this.getCourses = [];
  }
}
