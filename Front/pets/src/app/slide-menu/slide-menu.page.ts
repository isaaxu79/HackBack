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

  goToHome(){
    this.navCtrl.pop();
    this.navCtrl.navigateRoot('/tabs/feed-adopcion');
  }

}
