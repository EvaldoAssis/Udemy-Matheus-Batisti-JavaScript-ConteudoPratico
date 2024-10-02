const defaultOne = /Guaianases?/;

console.log(defaultOne.test('Guaianases')); // true, pois "s" está presente, e é opcional
console.log(defaultOne.test('Guaianase'));  // true, pois o "s" é opcional
console.log(defaultOne.test('Guaianasez')); // true, pois a expressão regular encontra "Guaianase", o restante não importa

const defaultTwo = /\d+\w?/; // O padrão diz que aceita um ou mais dígitos e pode ter um caractere alfanumérico opcional após os dígitos

console.log(defaultTwo.test('123'));     // Resultado: true, apenas dígitos são suficientes
console.log(defaultTwo.test('123abc'));  // Resultado: true, porque há dígitos seguidos por caracteres alfanuméricos (o primeiro caractere "a" corresponde à \w?)
console.log(defaultTwo.test('123 '));    // Resultado: true, pois o espaço não quebra a correspondência depois dos dígitos