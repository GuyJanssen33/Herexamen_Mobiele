import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsPage } from './details.page';
import {FavorietenPage} from "../favorieten/favorieten.page";
import {FavorietenPageModule} from "../favorieten/favorieten.module";
const routes: Routes = [
  {
    path: '',
    component: DetailsPage
  },
  {
    path: 'favorieten',
    loadChildren: () => import('../favorieten/favorieten.module').then( m => m.FavorietenPageModule)
  },{
    path: 'favorieten/:id',
    component: FavorietenPageModule,
    loadChildren: () => import('../favorieten/favorieten.module').then( m => m.FavorietenPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule {}
