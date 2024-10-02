const digitos = /\d+/;

console.log(digitos.exec("Tem o número 100 aqui"));
// Resultado: [ '100', index: 12, input: 'Tem o número 100 aqui', groups: undefined ]

console.log(digitos.exec("Tem o número aqui"));
// Resultado: null, pois não há dígitos na string