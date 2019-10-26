import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormularioAdopcionPage } from './formulario-adopcion.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioAdopcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormularioAdopcionPage]
})
export class FormularioAdopcionPageModule {}
