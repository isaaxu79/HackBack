import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.page.html',
  styleUrls: ['./slide-menu.page.scss'],
})
export class SlideMenuPage implements OnInit {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { 
    this.menuCtrl.enable(true)
  }

  ngOnInit() {
  }

  goToAdoptar(){
    this.navCtrl.pop();
    this.navCtrl.navigateRoot('/tabs/feed-adopcion');
  }
  goToMatch(){
    this.navCtrl.pop();
    this.navCtrl.navigateRoot('/tabs/home');
  }
  goToServices(){
    this.navCtrl.pop();
    this.navCtrl.navigateRoot('/tabs/home');
  }

}
