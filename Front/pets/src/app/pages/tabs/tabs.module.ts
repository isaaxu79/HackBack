import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
        { path: 'home', loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule)},
        { path: 'feed-match', loadChildren: '../../feed-match/feed-match.module#FeedMatchPageModule' },
        { path: 'servicios-list', loadChildren: './servicios-list/servicios-list.module#ServiciosListPageModule'},
        { path: 'perfil', loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule) },
        { path: 'feed-adopcion', loadChildren: '../../feed-adopcion/feed-adopcion.module#FeedAdopcionPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
