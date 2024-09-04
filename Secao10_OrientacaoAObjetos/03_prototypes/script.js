let account = {

    balance: 0,
    bank: "BANCO DE GUAIANASES"

}

console.log(Object.getPrototypeOf(account));
console.log(Object.getPrototypeOf(account) === Object.prototype);

/* É possível acessar métodos do objeto Object.
Isto porque o Object é o prototype do objeto account */
console.log(account.hasOwnProperty('bank'));
