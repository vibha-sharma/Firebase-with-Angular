import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { items } from '../../item';
@Component({
  selector: 'app-firebase-cloud-firestore',
  templateUrl: './firebase-cloud-firestore.component.html',
  styleUrls: ['./firebase-cloud-firestore.component.less'],
})
export class FirebaseCloudFirestoreComponent implements OnInit {
  editIcon = faEdit;
  removeIcon = faTimes;
  firebaseHeading: string = 'Cloud Firestore Database';
  titleHeading: string = 'Add Item in Cloud Firestore Database';
  itemCollection: AngularFirestoreCollection<items>;
  itemDoc: AngularFirestoreDocument<items>;
  items: Observable<items[]>;
  getItems: items[] = [];
  itemInfoForm;

  constructor(private afs: AngularFirestore, private formBuilder: FormBuilder) {
    this.itemCollection = this.afs.collection('items');
    this.itemCollection.snapshotChanges().subscribe((changes) => {
      return changes.map((a) => {
        const data = a.payload.doc.data() as items;
        data.id = a.payload.doc.id;
        this.getItems.push(data);
      });
    });
    this.itemInfoForm = this.formBuilder.group({
      name: '',
      title: '',
      price: 0,
    });
  }

  ngOnInit(): void {}
  addDetail(itemsInfo) {
    this.itemCollection.add(itemsInfo);
    this.itemInfoForm.reset();
    this.getItems = [];
  }
  removeItem(item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
    this.getItems = [];
  }
}
