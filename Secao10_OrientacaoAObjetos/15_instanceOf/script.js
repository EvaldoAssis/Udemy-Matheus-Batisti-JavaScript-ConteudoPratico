class Account {

  constructor(balance) {
    this.balance = balance;
  }

}

let accountOne = new Account(100);

class CurrentAccount extends Account {

  constructor(balance, bank, currency) {
    super(balance, balance);
    this.bank = bank;
    this.currency = currency;
  }

  deposit(value) {
    this.balance += value;
    return this.balance; 
  }

}

let accountTwo = new CurrentAccount(200, 'BANCO DE GUAIANASES', 'REAL');

console.log(accountTwo.balance);

console.log(accountTwo.deposit(100));

console.log(new CurrentAccount instanceof Account);
console.log(accountTwo instanceof Account);
