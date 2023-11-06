import { Component, EventEmitter, Output, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subscription, Observable, startWith, map } from 'rxjs';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserDetailsModel } from 'src/app/models/person/user/user-details.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessagesService } from 'src/app/shared/services/messages.service';

export interface State {
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
  @Output() formDataEvent = new EventEmitter<any>();
  formPerfil: FormGroup;
  // unsu : Subscription;
  filteredStates: Observable<State[]>;

  constructor( public message: MessagesService ) {

    this.formPerfil = new FormGroup({
      name: new FormControl('', Validators.required),
      birth_date: new FormControl('', Validators.required),
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
    this.sendData();
  }

  ngOnDestroy(): void {
    // this.unsu?.unsubscribe();
  }


  ngOnChanges(): void {
    this.loadData();

  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  sendData() {
    this.formPerfil.valueChanges.subscribe((value) => {
      this.formDataEvent.emit(value);
    });
  }

  loadData() {
    if (this.user) {
      this.formPerfil.controls['name'].setValue(this.user.name);
      this.formPerfil.controls['cep'].setValue(this.user.address.cep);
      this.formPerfil.controls['birth_date'].setValue("2000-01-01");
      this.formPerfil.controls['states'].setValue(this.user.address.city.state.name);
      this.formPerfil.controls['rua'].setValue(this.user.address.rua);
      this.formPerfil.controls['city'].setValue(this.user.address.city.name);
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