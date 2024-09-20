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

/*
Mesmo que o prototype da classe defina currency como "REAL", ao instanciar a classe, podemos fornecer um valor diferente para o campo currency, como "DOLLAR" neste exemplo. 
No final, teremos duas representações: o valor padrão no prototype e o valor fornecido na instância específica.
*/

Account.prototype.currency = "REAL";

let account = new Account(10000, 'BANK', 'DOLLAR');

console.log(Account.prototype.currency);
console.log(account.currency);