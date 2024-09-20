class Account {

  constructor(balance, bank, currency) {
    this.balance = balance;
    this.bank = bank;
    this.currency = currency;
  }

}

let account = new Account(10000, 'BANCO DE GUAIANASES', 'REAL');
console.log(account);