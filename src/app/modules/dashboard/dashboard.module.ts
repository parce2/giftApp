import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';

import { SharedModule } from '../../shared/shared.module';
import { GiftModule } from './gift/gift.module';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    GiftModule
  ],
  exports:[HomeComponent]
})
export class DashboardModule { }
