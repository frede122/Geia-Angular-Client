import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { EmitentComponent } from './emitent/emitent.component';
import { PartnerComponent } from './partner/partner.component';
import { SharedModule } from '../shared/shared.module';
// import { PersonComponent } from './person.component';
// import {MatIconModule} from '@angular/material/icon';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';
// import {MatSelectModule} from '@angular/material/select';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    ClientComponent,
    EmitentComponent,
    PartnerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
  ]
})
export class PersonModule { }
