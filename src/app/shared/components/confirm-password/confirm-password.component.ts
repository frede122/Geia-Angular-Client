import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent {
  hide = true;
  constructor(
    public dialogRef: MatDialogRef<ConfirmPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { email : string, password: string},
  ) {
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
