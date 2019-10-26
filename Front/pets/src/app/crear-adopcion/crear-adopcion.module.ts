import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearAdopcionPage } from './crear-adopcion.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAdopcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearAdopcionPage]
})
export class CrearAdopcionPageModule {}
