class PasswordValidator{
  constructor() { }

  static validaPassword(password) {
    let uppercaseControl = /[a-z]/,
      SymbolControl  = /[$-/:-?{-~!"^_`\[\]]/,
      numberControl = /[0-9]/,
      uppercaseVerificato = uppercaseControl.exec(password),
      symbolVerificato = SymbolControl.exec(password),
      numberVerificato = numberControl.exec(password);
    if(uppercaseVerificato === null || symbolVerificato === null || numberVerificato === null) return false
  }
}

module.exports = PasswordValidator;
