import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public api: RestApiService,public toastController: ToastController) { }
  items:any
  ready=false
  ngOnInit() {
  }
  async getAllData(){
    let uid = window.localStorage.getItem("idUser");

    await this.api.getDataLocal("api/v1/comun/user/"+uid)
    .subscribe(res => {
        this.items=res[0];
        console.log(this.items)
        this.ready = true
    },(err) => {
      console.log(err);
      this.presentToast("Ocurrió un error interno");
    });
    
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  ionViewWillEnter(){
    this.getAllData()
  }
}
