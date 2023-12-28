
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PersonFormComponent } from './components/forms/person-form/person-form.component';


@NgModule({
  declarations: [
    MenuComponent,
    ConfirmPasswordComponent,
    PersonFormComponent
  ],
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    HttpClientModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    ConfirmPasswordComponent,
    PersonFormComponent
  ]
})
export class SharedModule { }
