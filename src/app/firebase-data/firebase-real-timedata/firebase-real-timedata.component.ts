import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';
import {
  faEdit,
  faTimes,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

// Todo
import { items } from '../../item';

@Component({
  selector: 'app-firebase-real-timedata',
  templateUrl: './firebase-real-timedata.component.html',
  styleUrls: ['./firebase-real-timedata.component.less'],
})
export class FirebaseRealTimedataComponent implements OnInit {
  editIcon = faEdit;
  deleteIcon = faTimes;
  cancelIcon = faTimesCircle;
  // Todo Create
  getCourses: any = [];
  firebaseHeading: string = 'Realtime Database';
  titleHeading: string = 'Add Item in Realtime Database';
  itemCollection: any;
  coursesInfoForm;
  editState: boolean = false;
  courseToEdit: any = { id: '' };
  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder
  ) {
    this.itemCollection = db
      .list('courses')
      .snapshotChanges()
      .subscribe((result) => {
        this.getCourses = [];
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
      price: '',
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
  }
  removeDetail(event, data) {
    var adaRef = this.db.database.ref(`courses/${data.id}`);
    adaRef
      .remove()
      .then(() => {
        console.log('Remove succeeded.');
      })
      .catch((error) => {
        console.log('Remove failed: ' + error.message);
      });
  }
  editCourse(course) {
    this.courseToEdit = course;
    this.editState = true;
  }
  updateCourse(course) {
    var adaRef = this.db.database.ref(`courses/${course.id}`);
    adaRef
      .set(course.payload)
      .then(() => {
        this.editState = false;
        this.courseToEdit = { id: '' };
      })
      .catch(function (error) {
        console.log('Update failed: ' + error.message);
      });
  }
  cancel() {
    this.editState = false;
    this.courseToEdit = { id: '' };
  }
}
