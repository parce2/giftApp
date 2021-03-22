import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule,
    PipesModule
  ]
})
export class CoreModule { }
