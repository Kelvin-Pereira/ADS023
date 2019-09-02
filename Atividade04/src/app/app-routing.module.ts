import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  { path: 'header', loadChildren: './header/header.module#HeaderPageModule' },
  { path: 'footer', loadChildren: './footer/footer.module#FooterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'split', loadChildren: './split/split.module#SplitPageModule' },
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' },
<<<<<<< HEAD
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
=======
>>>>>>> f8b8f3f0f8a0042c1039c9d640c07595fb0b95d1

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
