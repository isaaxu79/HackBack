import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { NavController } from '@ionic/angular';

import { MediaCapture, CaptureVideoOptions ,MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx'
import { ModalController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PhotosService } from '../services/photos.service';

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
  endPoint = "192.168.43.63:3333/api/v1/fotos_empresa";
  lat =0;
  lng = 0;

  constructor(public navCtrl: NavController,
    private mediaCapture: MediaCapture,
    private media: Media,
    private file: File,
    private transfer: FileTransfer,
    private modalCtrl:ModalController,
    private geolocation:Geolocation,
    private imagePicker: ImagePicker,
    private photo : PhotosService
) {

   }

  ngOnInit() {




  }
  Ubicacion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude, this.lng = resp.coords.longitude
    });
    
  }


  async openGalery(){
    handler: () => {
      let options = { maximumImagesCount: 1, 
        quality:100
      }
      this.imagePicker.getPictures(options).then((results) => {
          console.log(results[0])
          let arr = results[0].split('/')
          let directory = arr[0]
          for(let m=1;m<arr.length-1;m++)
            directory = directory + "/"+ arr[m] 
          console.log(directory)
      }, (err) => { 
        console.log("error en takepickture")
        console.log(err)});

    }
  }
  upload(fileName,filePath,endPoint) {

    const fileTransfer: FileTransferObject = this.transfer.create();
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
     })
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
    let url = this.photo.saveImages(data);
    console.log(url);
    //this.api.sendData(data)
    //this.modalCtrl.dismiss();
    //this.navCtrl.navigateRoot('/create');
    //sthis.upload(data.name,data.fullPath,this.endPoint)
  }


}
