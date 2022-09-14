import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiFormSelectPageRoutingModule } from './multi-form-select-routing.module';

import { MultiFormSelectPage } from './multi-form-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    MultiFormSelectPageRoutingModule
  ],
  declarations: [MultiFormSelectPage]
})
export class MultiFormSelectPageModule {}
