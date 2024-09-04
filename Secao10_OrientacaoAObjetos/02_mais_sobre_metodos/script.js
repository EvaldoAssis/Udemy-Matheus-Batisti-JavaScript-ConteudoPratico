let account = {

    balance: 0,
    bank: "BANCO DE GUAIANASES",

    setBalance: function(balance) {
        this.balance = balance;
    },

    getBalance: function() {
        return this.balance;
    },

    setBank: function(bank) {
        this.bank = bank;
    },

    getBank: function() {
        return this.bank;
    },

    deposit: function (value) {
        this.balance += value;
        return this.balance;
    },

    withdraw: function (value) {
        this.balance -= value;
        return this.balance;    
    }

}

console.log(account.balance);
console.log(account.bank);

account.setBalance(1000);

console.log(account.balance);
console.log(account.getBalance());
