import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

var firebaseConfig = {
  apiKey: "AIzaSyD__RVp_z5Mic0KaVfYbNgiokfhsYkFgk8",
  authDomain: "my-realtime-app.firebaseapp.com",
  databaseURL: "https://my-realtime-app.firebaseio.com",
  projectId: "my-realtime-app",
  storageBucket: "",
  messagingSenderId: "937938850926"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
