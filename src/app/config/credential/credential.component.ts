import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserCredentialsModel } from 'src/app/models/person/user/user-credentials.model';
import { ValidatorsForm } from 'src/app/shared/helpers/ValidatorsForm';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ConfirmPasswordComponent } from 'src/app/shared/components/confirm-password/confirm-password.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss'],

})
export class CredentialComponent {
  
  hide = false;
  isEdit = false;
  formUser: FormGroup;
  user : UserCredentialsModel;

  constructor(
    private service: AuthService,
    public message: MessagesService,
    public dialog: MatDialog
  ){
    this.user = new UserCredentialsModel();
    this.formUser = new FormGroup({
      email: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.email]),
      newEmail: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.email, ValidatorsForm.equalsTo('email')]),
      oldPassword: new FormControl({ value: '', disabled: true }, Validators.required),
      newPassword: new FormControl({ value: '', disabled: true }),
      repeatNewPassword: new FormControl({ value: '', disabled: true }, ValidatorsForm.equalsTo('newPassword')),
    });

    this.formUser.get('email')?.valueChanges.subscribe(() => {
      this.formUser.get('newEmail')?.updateValueAndValidity();
    });
  }

  ngOnInit(): void {
    this.loadData();
    
  }
  loadData() {

    this.service.getMe().subscribe((data : UserCredentialsModel) => {
      this.user = {
        id: data.id,
        email: data.email
      };

      this.formUser.controls['email'].setValue(data.email);

   
    });
  }

  update() {
    console.log(JSON.stringify(this.user))
    if(this.formUser.value.newEmail){

    }
    if(this.formUser.value.newPassword){
      
    }
    // this.user.address.cep =  this.formPerfil.value.cep;

    // this.service.update(this.user).subscribe(() => alert("ok"));
  }

  passwordConfirm(): void {
    const dialogRef = this.dialog.open(ConfirmPasswordComponent, {
      data: {email: this.user.email},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.user.password = result;
        this.update();
      }
    });
  }
}
