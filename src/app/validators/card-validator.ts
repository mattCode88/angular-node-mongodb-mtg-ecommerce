import { AbstractControl, ControlContainer, ValidationErrors, ValidatorFn } from "@angular/forms";

export default class CardValidator {

  constructor() { }

  static validaQuantita(): ValidatorFn | null {

    return (control: AbstractControl): ValidationErrors | null => {

      if (isNaN(control.value) || control.value > 500 || control.value < 0 || control.value.includes('.')) {
        return { invalidQuantita: true };
      }

      return null;

    }

  }

  static validaPrezzzo(): ValidatorFn | null {

    return (control: AbstractControl): ValidationErrors | null => {

      if (isNaN(control.value) || control.value < 0) {
        return { invalidPrezzo: true };
      }

      if (control.value.includes('.')) {
        const splittedValue = control.value.split('.');
        if (splittedValue[1].length > 2) return { invalidPrezzo: true };
      }

      return null;

    }

  }

}
