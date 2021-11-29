import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalPageRoutingModule } from './final-page-routing.module';
import { FinalPageComponent } from './final-page.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    FinalPageComponent
  ],
  imports: [
    CommonModule,
    FinalPageRoutingModule,
    MatCardModule
  ]
})
export class FinalPageModule { }
