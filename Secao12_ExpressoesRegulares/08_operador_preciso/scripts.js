const cep = /\d{5}-\d{3}/;

console.log(cep.test("88117-500")); // true, pois corresponde ao formato 5 dígitos, hífen, 3 dígitos
console.log(cep.test("asd"));       // false, pois não há dígitos no formato esperado
console.log(cep.test("881-50"));    // false, pois não há 5 dígitos antes do hífen e 3 dígitos após
console.log(cep.test("99999-999")); // true, formato correto de CEP (5 dígitos, hífen, 3 dígitos)

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(48)9999-9999"));   // true, corresponde a 4 dígitos antes do hífen
console.log(tel.test("(48)55555-4444"));  // true, corresponde a 5 dígitos antes do hífen