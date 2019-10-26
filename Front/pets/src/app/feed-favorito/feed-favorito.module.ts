import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedFavoritoPage } from './feed-favorito.page';

const routes: Routes = [
  {
    path: '',
    component: FeedFavoritoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedFavoritoPage]
})
export class FeedFavoritoPageModule {}
