class Account {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    this.balance -= value;
  }
}

let acc = new Account(200);

acc.deposit(900);
console.log(acc.balance);

acc.withdraw(100);
console.log(acc.balance);