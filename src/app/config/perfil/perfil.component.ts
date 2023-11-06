import { MessagesService } from './../../shared/services/messages.service';
import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { UserDetailsModel } from 'src/app/models/person/user/user-details.model';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'perfil-config',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],

})
export class PerfilComponent {


  public user: UserDetailsModel;
  public userData?: UserDetailsModel;
  constructor(
    private service: AuthService,
    public message: MessagesService,
    private _snackBar: MatSnackBar
  ) {

    this.user = new UserDetailsModel();
    this.userData = new UserDetailsModel();
    this.loadData();

  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // this.unsu?.unsubscribe();
  }

  loadData() {
    this.service.getMe().subscribe((data: UserDetailsModel) => {
      this.user = {
        id: data.id,
        name: data.name,
        birth_date: data.birth_date,
        address: data.address,
      };
    });
  }

  compareObjects(o1: any, o2: any) {
    if (o1.id == o2.id)
      return true;
    else return false
  }

  receiveFormData(value: any) {
    if(this.userData){
      // address.city_id
      this.userData.address.cep = value.cep;
      this.userData.address.city_id = this.user.address.city.id;
      this.userData.address.neighborhood = value.neighborhood;
      this.userData.address.rua = value.rua;
      this.userData.address.number = value.number;
      this.userData.name = value.name;
      this.userData.birth_date = value.birth_date;
    }
  }

  update() {
    if (this.userData){
      console.log(JSON.stringify(this.userData))
      // console.log(this.userData)
      this.service.update(this.userData).subscribe((data) => {
        this.openSnackBar("Salvo com sucesso", "Fechar")
      });

    }

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { 
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }
}