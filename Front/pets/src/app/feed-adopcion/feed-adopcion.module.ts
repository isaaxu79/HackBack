import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModalPagePage } from '../modal-page/modal-page.page';

import { IonicModule } from '@ionic/angular';

import { FeedAdopcionPage } from './feed-adopcion.page';

const routes: Routes = [
  {
    path: '',
    component: FeedAdopcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedAdopcionPage,ModalPagePage]
})
export class FeedAdopcionPageModule {}
