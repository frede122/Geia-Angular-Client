import { MessagesService } from './../../shared/services/messages.service';
import { Subscription, Observable, startWith, map } from 'rxjs';
import { ValidatorsForm } from '../../shared/helpers/ValidatorsForm';
import { AuthService } from './../../shared/services/auth.service';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserDetailsModel } from 'src/app/models/person/user/user-details.model';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';



export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],

})
export class PerfilComponent {

  hide = true;
  isEdit = false;
  formPerfil: FormGroup;
  // unsu : Subscription;

  filteredStates: Observable<State[]>;

  public user: UserDetailsModel;
  constructor(
    private service: AuthService,
    public message: MessagesService,
  ) {

    this.user = new UserDetailsModel();
    this.loadData();
    this.formPerfil = new FormGroup({
      name: new FormControl('', Validators.required),
      cep: new FormControl('', [Validators.required, Validators.min(10000000), Validators.max(99999999)]),
      states: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required),

    });


    this.filteredStates = this.formPerfil.controls['states'].valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice())),
    );

  }



  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];
    

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    // this.unsu?.unsubscribe();
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  loadData() {

    this.service.getMe().subscribe((data : UserDetailsModel) => {
      this.user = {
        id: data.id,
        name: data.name,
        address: data.address,
      };
  
      
      console.log(data)
      this.formPerfil.controls['name'].setValue(data.name);
      this.formPerfil.controls['cep'].setValue(data.address.cep);
      this.formPerfil.controls['states'].setValue(data.address.city.state.name);
      this.formPerfil.controls['rua'].setValue(data.address.rua);
      this.formPerfil.controls['city'].setValue(data.address.city.name);
      this.formPerfil.controls['number'].setValue(data.address.number);
      this.formPerfil.controls['neighborhood'].setValue(data.address.neighborhood);
   
    });
  }

  compareObjects(o1: any, o2: any) {
    if( o1.id == o2.id )
    return true;
    else return false
  }



  update() {
    console.log(JSON.stringify(this.user))
    
    this.user.name =  this.formPerfil.value.name;
    this.user.address.cep =  this.formPerfil.value.cep;
    this.user.address.neighborhood =  this.formPerfil.value.neighborhood;
    this.user.address.number =  this.formPerfil.value.number;
    this.user.address.city_id = this.user.address.city.id;
    this.user.address.neighborhood = this.formPerfil.value.valueneighborhood;
    this.user.address.rua = this.formPerfil.value.rua;
    this.service.update(this.user).subscribe(() => alert("ok"));
  }

}