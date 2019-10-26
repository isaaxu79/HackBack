import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { MediaCapture, CaptureVideoOptions ,MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx'
import { ModalController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-camara-galeria',
  templateUrl: './camara-galeria.page.html',
  styleUrls: ['./camara-galeria.page.scss'],
})
export class CamaraGaleriaPage implements OnInit {

  mediaFiles=[];
  public image: string = null;
  public video: string = null;
  public typeOfFile: number;
  public videoType: string = null;
  endPoint = "";
  lat =0;
  lng = 0;

  constructor(public navCtrl: NavController,
    private mediaCapture: MediaCapture,
    private media: Media,
    private file: File,
    private transfer: FileTransfer,
    private modalCtrl:ModalController,
    private geolocation:Geolocation
) {

   }

  ngOnInit() {




  }
  Ubicacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude, this.lng = resp.coords.longitude
    });
    console.log("lat: " + this.lat + " lng: " + this.lng);
  }

  upload(fileName,filePath,endPoint) {

    /*const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
       fileKey: 'file',
       fileName: fileName,
       headers: {enctype: 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA'}
    }
    fileTransfer.upload(filePath, endPoint, options)
     .then((data) => {
       console.log(data)
     }, (err) => {
       console.log(err)
     })*/
     console.log(filePath);
  }

  openCamera(){
    let options: CaptureImageOptions = { limit: 1 }
    this.mediaCapture.captureImage(options).then(
    (data: MediaFile[]) => {
      this.preUpload(data[0])

    });
  }

  openVideo(){
    let options: CaptureVideoOptions={
      limit:1,
      duration: 6
    }
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) =>{
      let captureFile = res[0];
      this.preUpload(captureFile)
    });
  }


  preUpload(data){
    //this.api.sendData(data)
    //this.modalCtrl.dismiss();
    //this.navCtrl.navigateRoot('/create');
    this.upload(data.name,data.fullPath,this.endPoint)
  }


}
