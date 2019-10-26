import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vista-individual',
  templateUrl: './vista-individual.page.html',
  styleUrls: ['./vista-individual.page.scss'],
})
export class VistaIndividualPage implements OnInit {
  datos:any;
  constructor(private api: RestApiService,public toastController: ToastController) { }

  ngOnInit() {
  }

  async getInfo(){
    await this.api.postDataLocal(this.datos, "api/v1/publicacion/filter")
    .subscribe(res => {
        this.datos=res.publicacion;
        this.presentToast(res.message);
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
