import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [HomeComponent],
    imports: [
      CommonModule,
      HomeRoutingModule,
      MatCardModule
    ],
    providers: []
})
export class HomeModule { }
