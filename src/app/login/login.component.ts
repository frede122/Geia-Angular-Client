import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  constructor(
    private service : AuthService
  ) { 

    this.form = new FormGroup({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });

  }

  login(){
    var email : string = this.form.value.email;
    var password : string = this.form.value.password;
    this.service.login({email, password});
  }
}
