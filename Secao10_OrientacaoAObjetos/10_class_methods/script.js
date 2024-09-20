class Account {

  constructor(balance, bank, currency) {
    this.balance = balance;
    this.bank = bank; 
    // Se o valor de currency não for fornecido ao instanciar a classe, será usado o valor do prototype. Sem essa verificação, o valor ficaria como undefined.
    this.currency = currency || Account.prototype.currency;
  }

  deposit(value) {
    return this.balance += value;
  }

}

Account.prototype.currency = "REAL";

let account = new Account(10000, 'BANCO DE GUAIANASES');

console.log(account.currency);
console.log(account.deposit(10000));