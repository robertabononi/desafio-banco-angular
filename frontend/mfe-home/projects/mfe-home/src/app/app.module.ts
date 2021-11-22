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

@NgModule({
  declarations: [
    AppComponent,
    DadosCadastroComponent,
    UploadSelfieComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
