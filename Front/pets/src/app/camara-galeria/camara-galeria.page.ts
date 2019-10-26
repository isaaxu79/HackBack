import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-camara-galeria',
  templateUrl: './camara-galeria.page.html',
  styleUrls: ['./camara-galeria.page.scss'],
})
export class CamaraGaleriaPage implements OnInit {

  constructor(private imagePicker: ImagePicker) { }

  ngOnInit() {
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
}
