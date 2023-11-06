import { MessagesService } from './../../shared/services/messages.service';
import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { UserDetailsModel } from 'src/app/models/person/user/user-details.model';



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
  ) {

    this.user = new UserDetailsModel();
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
    this.userData = value;
  }

  update() {
    console.log(JSON.stringify(this.user))
    if (this.userData)
      this.service.update(this.userData).subscribe(() => {

      });

  }

}