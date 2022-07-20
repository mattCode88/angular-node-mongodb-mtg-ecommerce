class MyValidator{
  constructor() { }

  static validaPassword(password) {
    const uppercaseControl = /[a-z]/,
      SymbolControl  = /[$-/:-?{-~!"^_`\[\]]/,
      numberControl = /[0-9]/,
      uppercaseVerificato = uppercaseControl.exec(password),
      symbolVerificato = SymbolControl.exec(password),
      numberVerificato = numberControl.exec(password);
    if (uppercaseVerificato === null || symbolVerificato === null || numberVerificato === null) return true;
    return false;
  }

  static validaEmail(email) {
    const mailControl = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      mailVerificata = mailControl.exec(email);
    if (mailVerificata === null) return true;
    return false;
  }

  static validaCap(cap){
    const capControl = /^\d{5}$/,
      capVerificato = capControl.exec(cap);
    if (capVerificato === null) return true;
    return false;
  }

  static validaNCivico(nCivico){
    if (Number(nCivico) > 999) return true;
    return false;
  }

  static validaTelefono(telefono) {
    const cellulareControl = /^\d{10}$/,
      americaControl = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      internationalControl = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      cellulareVerificato = cellulareControl.exec(telefono),
      americaVerificato = americaControl.exec(telefono),
      internationalVerificato = internationalControl.exec(telefono);
    if (cellulareVerificato === null || americaVerificato === null || internationalVerificato === null) return true;
    return false;
  }

}

module.exports = MyValidator;
