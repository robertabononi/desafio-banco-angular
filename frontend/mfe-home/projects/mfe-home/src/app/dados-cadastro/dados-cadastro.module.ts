import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosCadastroRoutingModule } from './dados-cadastro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DadosCadastroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DadosCadastroModule { }
