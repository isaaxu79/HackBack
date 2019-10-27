import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.page.html',
  styleUrls: ['./servicios-list.page.scss'],
})
export class ServiciosListPage implements OnInit {
  items =[]
  constructor(private api: RestApiService,public toastController: ToastController) { } 

  ngOnInit() {
    this.getInfo()
  }
  async getInfo(){
    await this.api.getDataLocal("api/v1/servicio")
    .subscribe(res => {
        this.items=res;
        console.log(res)
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

}
