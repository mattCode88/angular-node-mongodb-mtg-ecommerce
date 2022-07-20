import { AbstractControl, ControlContainer, ValidationErrors, ValidatorFn } from "@angular/forms";

export default class AuthValidator {

  constructor() { }

  static validaMail(): ValidatorFn | null {

    const mailControl = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return (control: AbstractControl): ValidationErrors | null => {
      const mailVerificata = mailControl.exec(control.value);

      return mailVerificata !== null ? null : { invalidMail: true }

    }

  }

  static validaPassword(): ValidatorFn | null {

    let uppercaseControl: RegExp = /[a-z]/,
      SymbolControl: RegExp = /[$-/:-?{-~!"^_`\[\]]/,
      numberControl: RegExp = /[0-9]/;

    return (control: AbstractControl): ValidationErrors | null => {

      let uppercaseVerificato = uppercaseControl.exec(control.value);
      let symbolVerificato = SymbolControl.exec(control.value);
      let numberVerificato = numberControl.exec(control.value);

      return uppercaseVerificato === null || symbolVerificato === null || numberVerificato === null || control.value.length < 8 ?
        { invalidPassword: true } :
        null;

    }

  }

  static validaCap(): ValidatorFn | null {

    const capControl = /^\d{5}$/;

    return (control: AbstractControl): ValidationErrors | null => {
      const capVerificato = capControl.exec(control.value);

      return capVerificato !== null ? null : { invalidCap: true }

    }

  }

  static validaNCivico(): ValidatorFn | null {

    return (control: AbstractControl): ValidationErrors | null => {

      return Number(control.value) < 1000 ? null : { invalidNCivico: true }

    }

  }

  static validaTelefono(): ValidatorFn | null {

    const cellulareControl: RegExp = /^\d{10}$/,
      americaControl: RegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      internationalControl: RegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    return (control: AbstractControl): ValidationErrors | null => {

      const cellulareVerificato = cellulareControl.exec(control.value),
        americaVerificato = americaControl.exec(control.value),
        internationalVerificato = internationalControl.exec(control.value);

      return cellulareVerificato === null || americaVerificato === null || internationalVerificato === null ?
        { invalidTelefono: true } :
        null;

    }

  }

}
