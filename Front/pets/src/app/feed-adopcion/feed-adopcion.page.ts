import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-feed-adopcion',
  templateUrl: './feed-adopcion.page.html',
  styleUrls: ['./feed-adopcion.page.scss'],
})
export class FeedAdopcionPage implements OnInit {

  ruta = "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5c3871215bafe83b078adbe3/perro.jpg"

items: any;
  constructor(private api: RestApiService,public toastController: ToastController) { }


  estrellaAmarilla="md-star";
  estrella="star-outline";
  color = this.estrella;
  ngOnInit() {
    this.getInfo();
  }
  datos = {
    "tipo":"adopcion",
    "campo":1,
    "valor":1
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

  async favoritos(item){
    let datos2={
      "id_usuario":window.localStorage.getItem("idUser"),
      "id_publicacion":item.id_publicacion
    }

    if(item.star = "#FFFFFF"){
      item.star = "#FEDC1E"
      await this.api.postDataLocal(datos2, "api/v1/favorito")
    .subscribe(res => {
        this.items=res.publicacion;
        this.presentToast(res.message);
    },(err) => {
      console.log(err);
      this.presentToast("Ocurrió un error interno");
    });
    }else{
      item.star = "#FFFFFF";


    }
  }

}
