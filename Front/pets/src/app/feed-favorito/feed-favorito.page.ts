import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-feed-favorito',
  templateUrl: './feed-favorito.page.html',
  styleUrls: ['./feed-favorito.page.scss'],
})
export class FeedFavoritoPage implements OnInit {

  items: any;
  constructor(private api: RestApiService,public toastController: ToastController) { }


  estrellaAmarilla="md-star";
  estrella="star-outline";
  color = this.estrella;
  ngOnInit() {
    this.getInfo();
  }
  datos = {
    "tipo":"favoritos",
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
