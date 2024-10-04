const validarId = /\d+ID\b/;

console.log(validarId.test('nao'));
console.log(validarId.test('123456987'));
console.log(validarId.test('ID'));
console.log(validarId.test('123456987ID'));
console.log(validarId.test('1ID'));