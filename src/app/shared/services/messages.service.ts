import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  getErrorMessage(control: AbstractControl | null): string {
    const errorMessages: { [key: string]: string } = {
      required: 'Campo obrigatório, entre com algum valor',
      equalsTo: 'Campos não coincidem',
      min: 'Campo não atingiu valor mínimo de caracteres',
      max: 'Campo atingiu valor máximo de caracteres',
      email: 'Não é um E-mail válido',
      cep: 'Não é um CEP válido',
    };
  
    const error = Object.keys(errorMessages).find((errorName) => control?.hasError(errorName));

    return error ? errorMessages[error] : 'campo invalido';

  }



}
