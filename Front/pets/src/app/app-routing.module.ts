import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'camara-galeria', loadChildren: './camara-galeria/camara-galeria.module#CamaraGaleriaPageModule' },
  { path: 'feed-adopcion', loadChildren: './feed-adopcion/feed-adopcion.module#FeedAdopcionPageModule' },
  { path: 'feed-match', loadChildren: './feed-match/feed-match.module#FeedMatchPageModule' },  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
