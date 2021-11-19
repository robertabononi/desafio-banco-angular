import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [HomeComponent],
    imports: [
      CommonModule,
      HomeRoutingModule,
      MatCardModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
    ],
    providers: []
})
export class HomeModule { }
