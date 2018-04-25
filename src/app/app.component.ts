import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Users {
  name: string;
  Place: string;
  Profession : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  usersCol: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;
  name: string;
  place: string;
  profession: string;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
  }

  addUser(){
    let newUser: Users = {
      name: this.name,
      Place: this.place,
      Profession: this.profession
    }
    this.afs.collection('users').add(newUser);
  }
}
