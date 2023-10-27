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
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MenuComponent,
    ConfirmPasswordComponent
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
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    ConfirmPasswordComponent
  ]
})
export class SharedModule { }
