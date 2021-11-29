import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalPageRoutingModule } from './final-page-routing.module';
import { FinalPageComponent } from './final-page.component';


@NgModule({
  declarations: [
    FinalPageComponent
  ],
  imports: [
    CommonModule,
    FinalPageRoutingModule
  ]
})
export class FinalPageModule { }
