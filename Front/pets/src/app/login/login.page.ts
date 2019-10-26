import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string
  password:string

  constructor(
    public api: RestApiService,
    public navCtrl: NavController,
    public toastController: ToastController) { }

    
  ngOnInit() {
  }
  login(){
    let jsonData = {
      "email" : this.email,
      "password": this.password
    }
    this.indentifyUser(jsonData);
  }

  async indentifyUser(jsonData){
    await this.api.postDataLocal(jsonData, "auth/login")
    .subscribe(res => {
      if(res.message){ // If the length is 3 it is an error.
        console.log(res);
        this.presentToast(res.message);
      }else{
        console.log(res)
        window.localStorage.setItem("token",res.access_token.token)
        window.localStorage.setItem("idUser",res.user.id)
        //this.navCtrl.navigateRoot('/', res);
      }
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
