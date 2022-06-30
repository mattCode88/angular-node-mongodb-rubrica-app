import { AbstractControl, ControlContainer, ValidationErrors, ValidatorFn } from "@angular/forms";

export default class ContattiValidator {

  constructor() { }

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

  static validaMail(): ValidatorFn | null {

    const mailControl = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return (control: AbstractControl): ValidationErrors | null => {
      const mailVerificata = mailControl.exec(control.value);

      return mailVerificata !== null ? null : { invalidMail: true }

    }

  }

}
