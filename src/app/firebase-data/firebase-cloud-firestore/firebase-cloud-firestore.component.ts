import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

import {
  faEdit,
  faTimes,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { items } from '../../item';
@Component({
  selector: 'app-firebase-cloud-firestore',
  templateUrl: './firebase-cloud-firestore.component.html',
  styleUrls: [
    '../firebase-shared/firebase-shared.component.less',
    './firebase-cloud-firestore.component.less',
  ],
})
export class FirebaseCloudFirestoreComponent implements OnInit {
  editIcon = faEdit;
  deleteIcon = faTimes;
  cancelIcon = faTimesCircle;
  @Input() fireCBHeading = '';
  @Input() titleCBHeading = '';
  @Input() tableHeader = [];
  itemCollection: AngularFirestoreCollection<items>;
  itemDoc: AngularFirestoreDocument<items>;
  //Items: items[];
  getItems: items[] = [];
  itemInfoForm;
  editState: boolean = false;
  itemToEdit: any = { id: '' };

  constructor(private afs: AngularFirestore, private formBuilder: FormBuilder) {
    this.itemCollection = this.afs.collection('items');
    this.itemCollection.snapshotChanges().subscribe((changes) => {
      this.getItems = [];
      return changes.map((a) => {
        const data = a.payload.doc.data() as items;
        data.id = a.payload.doc.id;
        this.getItems.push(data);
      });
    });
    this.itemInfoForm = this.formBuilder.group({
      name: '',
      title: '',
      price: '',
    });
  }

  ngOnInit(): void {}
  addDetail(itemsInfo: items) {
    this.itemCollection.add(itemsInfo);
    this.itemInfoForm.reset();
    this.getItems = [];
  }
  removeItem(item: items) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
    this.getItems = [];
  }
  editItem(item: items) {
    this.itemToEdit = item;
    this.editState = true;
  }
  updateItem(item: items) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
    this.editState = false;
    this.itemToEdit.id = '';
  }
  cancel() {
    this.editState = false;
    this.itemToEdit = { id: '' };
  }
}
