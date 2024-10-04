const validarNomeMarca = /\Nome marca: (Nike|Adidas|Puma|Asics)/;
//const validarNomeMarca = /\w+: (Nike|Adidas|Puma|Asics)/;

console.log(validarNomeMarca.test('Nome marca: Nike'));
console.log(validarNomeMarca.test('Nome marca: Adidas'));
console.log(validarNomeMarca.test('Nome marca: Puma'));
console.log(validarNomeMarca.test('Quick'));
console.log(validarNomeMarca.test('Nome marca:'));
console.log(validarNomeMarca.test('Nome marca: 6767213'));