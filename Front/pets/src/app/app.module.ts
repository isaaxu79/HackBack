import { MenuComponent } from './menu/menu.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { firebaseConfig } from '../environments/firebaseconfig';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

import { MediaCapture, CaptureVideoOptions ,MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ImagePicker } from '@ionic-native/image-picker/ngx';

@NgModule({
  declarations: [AppComponent,MenuComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule, AngularFirestoreModule, HttpClientModule],
  providers: [
    Geolocation,
    ImagePicker,
    StatusBar,
    SplashScreen,
    File,
    MediaCapture,
    OpenNativeSettings,
    Media,
    FileTransfer,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
