import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadSelfieComponent } from './upload-selfie.component';

const routes: Routes = [

  {
    path: '',
    component: UploadSelfieComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadSelfieRoutingModule { }
