import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarDadosClienteComponent } from './mostrar-dados-cliente.component';

const routes: Routes = [

  {
    path: '',
    component: MostrarDadosClienteComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostrarDadosClienteRoutingModule { }
