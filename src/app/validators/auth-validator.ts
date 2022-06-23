import { AbstractControl, ControlContainer, ValidationErrors, ValidatorFn } from "@angular/forms";

export default class AuthValidator {

  constructor() { }

  static validaMail(): ValidatorFn | null {

    return (control: AbstractControl): ValidationErrors | null => {
      return !control.value.includes('@') || !control.value.includes('.') ? { invalidMail: true } : null;
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

}
