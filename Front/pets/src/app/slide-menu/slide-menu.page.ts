import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.page.html',
  styleUrls: ['./slide-menu.page.scss'],
})
export class SlideMenuPage implements OnInit {

  constructor(public navCtrl: NavController,) { }

  ngOnInit() {
  }

  goToAdoptar(){
    this.navCtrl.pop();
    this.navCtrl.navigateRoot('/feed-adopcion');
  }
  goToMatch(){
    this.navCtrl.pop();
    this.navCtrl.navigateRoot('/feed-match');
  }
  goToServices(){
    this.navCtrl.pop();
    this.navCtrl.navigateRoot('/feed-favorito');
  }

}
