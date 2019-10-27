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
  constructor(private api: RestApiService,public toastController: ToastController) {     this.getInfo();}


  estrellaAmarilla="md-star";
  estrella="star-outline";
  color = this.estrella;
  ngOnInit() {
    this.getInfo();
  }

  datos = {
    "tipo":"favoritos",
    "campo":1,
    "valor":1
  }
  buttonColor = "FEDC1E";

  async getInfo(){
    await this.api.getDataLocal("api/v1/favorito/user/" + window.localStorage.getItem("idUser"))
    .subscribe(res => {
        this.items=res
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
    await this.api.postDataLocal(datos2, "favorito/" + item.id)
    .subscribe(res => {
        this.items=res.publicacion;
        this.presentToast(res.message);
    },(err) => {
      console.log(err);
      this.presentToast("Ocurrió un error interno");
    });
  }


}
