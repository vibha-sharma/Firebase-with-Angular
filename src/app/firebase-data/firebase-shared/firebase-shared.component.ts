import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firebase-shared',
  templateUrl: './firebase-shared.component.html',
  styleUrls: ['./firebase-shared.component.less'],
})
export class FirebaseSharedComponent implements OnInit {
  fireRBHeading: string = 'Realtime Database';
  fireCBHeading: string = 'Cloud Firestore Database';
  titleCBHeading: string = 'Add Item in Cloud Firestore Database';
  titleRBHeading: string = 'Add Item in Realtime Database';
  tableHeader: string[] = ['Name', 'Title', 'Price', 'Update'];
  // FBNameLabel: any = [
  //   {
  //     enterLabel: ['Enter Name', 'Enter Title', 'Enter Price'],
  //     placeholder: ['Name', 'Title', 'Price'],
  //   },
  //   // {
  //   //   "cars":[ "Ford", "BMW", "Fiat" ],
  //   //   enterName: 'Enter Name',
  //   //   enterTitle: 'Enter Title',
  //   //   enterPrice: 'Enter Price',
  //   // },
  //   // {
  //   //   labelName: 'Name',
  //   //   labelTitle: 'Title',
  //   //   labelPrice: 'Price',
  //   // },
  // ];

  constructor() {}

  ngOnInit(): void {}
}
