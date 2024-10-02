const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6")); //false
console.log(reg1.test("Temos o número 2")); //true
console.log(reg1.test("Temos o número 26")); //true - O resultado é true porque a expressão regular /[12345]/ verifica se qualquer um dos números 1, 2, 3, 4 ou 5 aparece na string. Mesmo que até esse número o valor requirido for encontrado.

const reg2 = /[1-9]/;

console.log(reg2.test('Temos o número 1234567891')); // true - O regex /[1-9]/ procura por qualquer dígito entre 1 e 9 na string.