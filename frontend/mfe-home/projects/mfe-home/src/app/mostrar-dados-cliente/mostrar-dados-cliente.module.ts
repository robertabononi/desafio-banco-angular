import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarDadosClienteComponent } from './mostrar-dados-cliente.component';
import { MostrarDadosClienteRoutingModule } from './mostrar-dados-cliente-routing.module';



@NgModule({
  declarations: [
    MostrarDadosClienteComponent
  ],
  imports: [
    CommonModule,
    MostrarDadosClienteRoutingModule
  ]
})
export class MostrarDadosClienteModule { }
