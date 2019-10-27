import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'camara-galeria', loadChildren: './camara-galeria/camara-galeria.module#CamaraGaleriaPageModule' },
  { path: 'feed-adopcion', loadChildren: './feed-adopcion/feed-adopcion.module#FeedAdopcionPageModule' },
  { path: 'feed-match', loadChildren: './feed-match/feed-match.module#FeedMatchPageModule' },  
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'feed-favorito', loadChildren: './feed-favorito/feed-favorito.module#FeedFavoritoPageModule' },
  { path: 'formulario-adopcion', loadChildren: './formulario-adopcion/formulario-adopcion.module#FormularioAdopcionPageModule' },
  { path: 'crear-adopcion', loadChildren: './crear-adopcion/crear-adopcion.module#CrearAdopcionPageModule' },
  { path: 'slide-menu', loadChildren: './slide-menu/slide-menu.module#SlideMenuPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
