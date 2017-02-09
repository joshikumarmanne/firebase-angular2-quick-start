import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { AngularFireModule } from 'angularfire2';
import { MDL } from './MaterialDesignLiteUpgradeElement';
import { Routes, RouterModule  } from '@angular/router';

export const firebaseConfig = {
  apiKey: "AIzaSyDrT61-zg-FuonOa4sDbChuRXk8d2mx-p8",
  authDomain: "fir-89d50.firebaseapp.com",
  databaseURL: "https://fir-89d50.firebaseio.com",
  storageBucket: "fir-89d50.appspot.com",
  messagingSenderId: "936509313976"
};

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
];

const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    MDL,
    IndexComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
