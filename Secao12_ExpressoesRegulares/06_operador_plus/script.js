const umOuMaisNumero = /\d+/; // Aceitamos um ou mais dígitos

console.log(umOuMaisNumero.test('12658984')); // Resultado: true, pois corresponde a vários dígitos
console.log(umOuMaisNumero.test('')); // Resultado: false, pois não há dígitos
console.log(umOuMaisNumero.test('jsdjhsjhdjshd')); // Resultado: false, pois não há dígitos