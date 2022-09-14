import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiFormSelectPage } from './multi-form-select.page';

const routes: Routes = [
  {
    path: '',
    component: MultiFormSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiFormSelectPageRoutingModule {}
