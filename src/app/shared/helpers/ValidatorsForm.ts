import { FormControl, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidatorsForm {

  static equalsTo(validValue: string) {

    return (control: AbstractControl): ValidationErrors | null => {

      if (validValue == null) {
        throw new Error('É necessário informar o campo');
      }

      const otherField = (<FormGroup>control.root).get(validValue);

      if (otherField == null) {
        throw new Error('É necessário um campo válido');
      }

      if (control.value != otherField.value) {
        return { equalsTo: true }
      }

      return null;

    };
  }

  static cepValidator() {
    return (control: AbstractControl): ValidationErrors | null => {

      const cep = control.value;
      if (cep && cep !== '') {
        const validacep = /^[0-9]{8}$/;
        return validacep.test(cep) ? null : { cepInvalido: true };
      }
      return null;
    }
  }

}