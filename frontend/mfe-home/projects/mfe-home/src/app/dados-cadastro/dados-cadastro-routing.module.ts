import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosCadastroComponent } from './dados-cadastro.component';

const routes: Routes = [

  {
    path: '',
    component: DadosCadastroComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosCadastroRoutingModule { }
