import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
      InfosComponent
    ],
    imports: [
      CommonModule,
      InfosRoutingModule,
      HttpClientModule,
      MatCardModule
    ],
    providers: []
})
export class InfosModule { }
