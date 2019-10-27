import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditAdoptionPage } from './edit-adoption.page';

const routes: Routes = [
  {
    path: '',
    component: EditAdoptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditAdoptionPage]
})
export class EditAdoptionPageModule {}
