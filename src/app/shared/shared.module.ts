import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomsModule } from './customs/customs.module';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomsModule,
    PagesModule
  ],
  exports:[CustomsModule,PagesModule]
})
export class SharedModule { }
