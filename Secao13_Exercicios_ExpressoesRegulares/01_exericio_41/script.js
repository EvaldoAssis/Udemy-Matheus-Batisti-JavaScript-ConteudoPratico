const validarMaiuscula = /[A-Z]/;

console.log(validarMaiuscula.test('nao'));
console.log(validarMaiuscula.test('NAO'));
console.log(validarMaiuscula.test('NÃO'));
console.log(validarMaiuscula.test('123456987'));