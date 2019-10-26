import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VistaIndividualPage } from './vista-individual.page';

const routes: Routes = [
  {
    path: '',
    component: VistaIndividualPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VistaIndividualPage]
})
export class VistaIndividualPageModule {}
