import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { DadosCadastroComponent } from './dados-cadastro/dados-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadSelfieComponent } from './upload-selfie/upload-selfie.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { SelectPlanModule } from './select-plan/select-plan.module';
import { MostrarDadosClienteModule } from './mostrar-dados-cliente/mostrar-dados-cliente.module';

@NgModule({
  declarations: [
    AppComponent,
    DadosCadastroComponent,
    UploadSelfieComponent,
    SelectPlanComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    SelectPlanModule,
    MostrarDadosClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
