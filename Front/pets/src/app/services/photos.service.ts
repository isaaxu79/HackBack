import { Injectable } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    private storage: AngularFireStorage,
    private database: AngularFirestore
  ) { }

  dbRef = this.database.collection('images');

  saveImages(image) {
    const nameFile = `${new Date().getTime()}.jpg`;
    let fotoUrl = '';
    this.storage.ref(`images/${nameFile}`).putString(image,'data_url')
    .then(img => {
      img.ref.getDownloadURL().then(url => {
        fotoUrl = url;
        console.log('image saved');
      });
    }).catch(err => console.log(err.message));
    return fotoUrl;
  }
}
