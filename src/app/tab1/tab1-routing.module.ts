import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {Tab1PageModule} from "./tab1.module";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'Tab2Page/: id',
    loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
