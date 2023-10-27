import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { ConfigComponent } from './config.component';
import { CredentialComponent } from './credential/credential.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './perfil/perfil.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    PerfilComponent,
    ConfigComponent,
    CredentialComponent,

    
  ],
  imports: [
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    SharedModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    HttpClientModule
    
  ],
  exports: [
    PerfilComponent
  ]
})
export class ConfigModule { }
