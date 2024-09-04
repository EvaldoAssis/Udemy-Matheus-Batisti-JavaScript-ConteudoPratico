let account = {

    balance: 0,
    bank: "BANCO DE GUAIANASES",

    deposit: function (value) {
        this.balance += value;
        return this.balance;
    },

    withdraw: function (value) {
        this.balance -= value;
        return this.balance;    
    }

}

/* Abaixo é possível notar que criamos o objeto currentAccount com base no objeto account.
   Assim, podemos notar que currentAccount consegue acessar a propriedade 'bank'. Entretanto, 
   ao executarmos o código 'currentAccount.hasOwnProperty("bank")', podemos ver que essa propriedade 
   não pertence ao objeto currentAccount, mas sim ao objeto account, do qual ele foi criado. */

let currentAccount = Object.create(account);
console.log(currentAccount.bank);
console.log(currentAccount.hasOwnProperty("bank"));

console.log(Object.getPrototypeOf(currentAccount) === account);