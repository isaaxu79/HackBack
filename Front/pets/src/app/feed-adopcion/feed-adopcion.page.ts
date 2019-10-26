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

  // items debe llenarse con lo del api
  /*items =[{
    src:this.ruta,
    text:'testing testing testing testing testing testing sjasnd kjas hasjkdh kshdfksdb dsuhfksdj nskhfskd hsjfkl sjas hash asdkafdsjk bdsjkfbdjsk bdsjkfdsjkfdkjsb skjdbs jk'
  },
  {
    src:this.ruta,
    text:'testing testing testing testing testing testing sjasnd kjas hasjkdh kshdfksdb dsuhfksdj nskhfskd hsjfkl sjas hash asdkafdsjk bdsjkfbdjsk bdsjkfdsjkfdkjsb skjdbs jk'
  },
  {
    src:this.ruta,
    text:'testing testing testing testing testing testing sjasnd kjas hasjkdh kshdfksdb dsuhfksdj nskhfskd hsjfkl sjas hash asdkafdsjk bdsjkfbdjsk bdsjkfdsjkfdkjsb skjdbs jk'
  },
  {
    src:this.ruta,
    text:'testing testing testing testing testing testing sjasnd kjas hasjkdh kshdfksdb dsuhfksdj nskhfskd hsjfkl sjas hash asdkafdsjk bdsjkfbdjsk bdsjkfdsjkfdkjsb skjdbs jk'
  }
]*/
items: any;
  constructor(private api: RestApiService,public toastController: ToastController) { }

  ngOnInit() {
    this.getInfo();
  }
  datos = {
    "tipo":"adopcion"
  }

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

}
