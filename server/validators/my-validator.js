class MyValidator{
  constructor() { }

  static validaPassword(password) {
    const uppercaseControl = /[a-z]/,
      SymbolControl  = /[$-/:-?{-~!"^_`\[\]]/,
      numberControl = /[0-9]/,
      uppercaseVerificato = uppercaseControl.exec(password),
      symbolVerificato = SymbolControl.exec(password),
      numberVerificato = numberControl.exec(password);
    if(uppercaseVerificato === null || symbolVerificato === null || numberVerificato === null) return false
  }

  static validaEmail(email) {
    const mailControl = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      mailVerificata = mailControl.exec(email);
    if (mailVerificata === null) return true;
  }

}

module.exports = MyValidator;
