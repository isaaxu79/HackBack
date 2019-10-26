import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feed-match',
  templateUrl: './feed-match.page.html',
  styleUrls: ['./feed-match.page.scss'],
})
export class FeedMatchPage implements OnInit {

  ruta = "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg"

  // items debe llenarse con lo del api
  items =[]
  constructor(private api: RestApiService,public toastController: ToastController) { }

  estrellaAmarilla="md-star";
  estrella="star-outline";
  color = this.estrella;
  ngOnInit() {
    this.getInfo();
  }
  datos = {
    "tipo":"match",
    "campo":"especie",
    "valor":"Lomo"
  }

  buttonColor = "FEDC1E";

  async getInfo(){
    await this.api.postDataLocal(this.datos, "api/v1/publicacion/filter")
    .subscribe(res => {
        this.items=res.publicacion;
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

  favoritos(item){
    if(item.star = "#FFFFFF"){
      item.star = "#FEDC1E"
    }else{
      item.star = "#FFFFFF";
    }
  }
}
