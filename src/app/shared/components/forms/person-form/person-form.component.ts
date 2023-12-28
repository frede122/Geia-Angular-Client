import { Component, EventEmitter, Output, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subscription, Observable, startWith, map } from 'rxjs';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserDetailsModel } from 'src/app/models/person/user/user-details.model';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { StateModel } from 'src/app/models/addreess/state.model';
import { CityModel } from 'src/app/models/addreess/city.model';
import * as moment from 'moment';
import { StateService } from 'src/app/services/address/state.service';
import { CityService } from 'src/app/services/address/city.service';
import { ValidatorsForm } from 'src/app/shared/helpers/ValidatorsForm';

export interface State {
  flag: string;
  name: string;
  population: string;
}
export interface City {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit, OnDestroy {

  @Input('dataUser') user?: UserDetailsModel;
  @Output() formDataEvent = new EventEmitter<UserDetailsModel>();
  state: StateModel[] = [];
  citys: CityModel[] = [];

  formPerfil: FormGroup;
  filteredStatesOptions?: Observable<StateModel[]>;
  filteredCitysOptions?: Observable<CityModel[]>;
  
  constructor(
    public message: MessagesService,
    private stateService: StateService,
    private cityService: CityService
  ) {
    this.formPerfil = new FormGroup({
      name: new FormControl('', Validators.required),
      birth_date: new FormControl('', Validators.required),
      cep: new FormControl('', [Validators.required, ValidatorsForm.cepValidator()]),
      state: new FormControl('', Validators.required),
      rua: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required),
    });
    
  }
  
  ngOnInit(): void {
    this.loadStates();
    this.filteredCitysOptions = this.filterOptionCity();
    this.filteredStatesOptions = this.filterOptionState();
    this.sendData();
    this.changeState();
  }

  filterOptionCity(): Observable<CityModel[]> {
    return this.formPerfil.controls['city'].valueChanges.pipe(startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filterCity(name as string) : this.citys.slice();
      }),
    );
  }
  private _filterCity(name: string): CityModel[] {
    const filterValue = name.toLowerCase();
    return this.citys.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  filterOptionState(): Observable<StateModel[]> {
    return this.formPerfil.controls['state'].valueChanges.pipe(startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filterState(name as string) : this.state.slice();
      }),
    );
  }

  private _filterState(name: string): StateModel[] {
    const filterValue = name.toLowerCase();
    return this.state.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  filterObs(control: string, array: any[],): Observable<any[]> {
    return this.formPerfil.controls[control].valueChanges.pipe(startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(array, name as string) : array.slice();
      }),
    );
  }
  private _filter(array: any[], name: string): any[] {
    const filterValue = name.toLowerCase();
    return array.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  changeState() {
    this.formPerfil.controls['state'].valueChanges.subscribe((data) => {
      if (typeof data != 'string') {
        this.loadCity(data.id)
        
      }
    });
  }

  loadCity(id: number) {
    this.cityService.getByStateId(id).subscribe((value) => {
      this.citys = value;
      let city = this.formPerfil.value.city;
      if(typeof city == "string" || city.state.id != id)
        this.formPerfil.controls['city'].setValue('');
    });
  }

  loadStates() {
    this.stateService.getAll().subscribe((value) => {
      this.state = value;
    });
  }



  displayFn(value: any): string {
    return value && value.name ? value.name : value;
  }



  ngOnDestroy(): void {
    // this.unsu?.unsubscribe();
  }


  ngOnChanges(): void {
    this.loadData();
  }

  sendData() {
    this.formPerfil.valueChanges.subscribe((value) => {
      const users: UserDetailsModel = {
        id: this.user?.address.id || 0,
        name: value.name,
        birth_date: moment(value.birth_date).format('YYYY-MM-DD'),
        address: {
          id: this.user?.address.id || 0,
          cep: value.cep,
          city: new CityModel(),
          city_id: value.city.id || 0,
          neighborhood: value.neighborhood,
          rua: value.rua,
          number: value.number
        }
      }


      this.formDataEvent.emit(users);
    });


  }

  loadData() {
    if (this.user) {
      this.formPerfil.controls['name'].setValue(this.user.name);
      this.formPerfil.controls['cep'].setValue(this.user.address.cep);
      this.formPerfil.controls['birth_date'].setValue(this.user.birth_date);
      this.formPerfil.controls['state'].setValue(this.user.address.city.state);
      this.formPerfil.controls['rua'].setValue(this.user.address.rua);
      this.formPerfil.controls['city'].setValue(this.user.address.city);
      this.formPerfil.controls['number'].setValue(this.user.address.number);
      this.formPerfil.controls['neighborhood'].setValue(this.user.address.neighborhood);
    }
  }

  compareObjects(o1: any, o2: any) {
    if (o1.id == o2.id)
      return true;
    else return false
  }

}