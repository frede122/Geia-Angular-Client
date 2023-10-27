import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { EmitentComponent } from './emitent/emitent.component';
import { PartnerComponent } from './partner/partner.component';



@NgModule({
  declarations: [
    ClientComponent,
    EmitentComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PersonModule { }
