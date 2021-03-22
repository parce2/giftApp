import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [IndexComponent, ResultadoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[IndexComponent,ResultadoComponent]
})
export class GiftModule { }
