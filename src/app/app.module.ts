import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HousesListComponent} from './components/houses-list/houses-list.component';
import {firebaseConfig} from './config/config';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';


@NgModule({
  declarations: [
    AppComponent,
    HousesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ContentLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
