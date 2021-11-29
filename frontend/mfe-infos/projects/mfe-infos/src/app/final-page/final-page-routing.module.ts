import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosComponent } from '../infos/infos.component';
import { FinalPageComponent } from './final-page.component';

const routes: Routes = [
  {
    path: '',
    component: FinalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalPageRoutingModule { }
