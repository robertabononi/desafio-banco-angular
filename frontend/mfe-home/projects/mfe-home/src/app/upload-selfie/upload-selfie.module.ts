import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadSelfieRoutingModule } from './upload-selfie-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UploadSelfieRoutingModule,
    HttpClientModule
  ]
})
export class UploadSelfieModule { }
