class Account {

  constructor(balance) {
    this.balance = balance;
  }

}

let accountOne = new Account(100);

class CurrentAccount extends Account {

  constructor(balance, bank, currency) {
    super(balance);
    this.bank = bank;
    this.currency = currency;
  }

  deposit(value) {
    this.balance += value;
    return this.balance;
  }

}

let acc = new Account(200);
console.log(acc);

let accountTwo = new CurrentAccount(200, 'BANCO DE GUAIANASES', 'REAL');
console.log(accountTwo);
accountTwo.deposit(100);
console.log(accountTwo);

console.log(acc);
