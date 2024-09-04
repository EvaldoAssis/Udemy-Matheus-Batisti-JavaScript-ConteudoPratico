let account = {

    balance: 0,

    deposit: function (value) {
        this.balance += value;
        return this.balance;
    },

    withdraw: function (value) {
        this.balance -= value;
        return this.balance;    }
}

console.log(account.balance);

account.deposit(100);
console.log(account.balance);

account.withdraw(50);
console.log(account.balance);
