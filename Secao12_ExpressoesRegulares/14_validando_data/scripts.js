const validaNumero = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/; //Essa expressão regular aceita qualquer data no formato dd/mm/yyyy, ou seja, dois números seguidos por /, mais dois números e mais quatro números para o ano.

console.log(validaNumero.test('24/02/2002'));
console.log(validaNumero.test('24/02/02'));
console.log(validaNumero.test('24-02-2002'));
console.log(validaNumero.test('24-02-02'));
console.log(validaNumero.test('99-99-2002')); //O  resultado será true, pois não há tratativa