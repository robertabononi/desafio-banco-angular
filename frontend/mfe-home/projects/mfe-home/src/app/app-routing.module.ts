import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (m) => m.HomeModule
      )
  },

  {
    path: 'dados-cadastro',
    loadChildren: () =>
      import('./dados-cadastro/dados-cadastro.module').then(
        (m) => m.DadosCadastroModule
      )
  },

  {
    path: 'upload-selfie',
    loadChildren: () =>
      import('./upload-selfie/upload-selfie.module').then(
        (m) => m.UploadSelfieModule
      )
  },

  {
    path: 'select-plan',
    loadChildren: () =>
      import('./select-plan/select-plan.module').then(
        (m) => m.SelectPlanModule
      )
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
