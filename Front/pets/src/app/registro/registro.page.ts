import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public navCtrl: NavController,) { }

  ngOnInit() {
  }

  registro(){
    this.navCtrl.pop();
    this.navCtrl.navigateRoot('/slide-menu');
    
  }

}
