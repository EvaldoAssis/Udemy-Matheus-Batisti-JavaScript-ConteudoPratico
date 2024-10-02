const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test('www.google.com'));
console.log(validaDominio.test('www.youtube.com'));
console.log(validaDominio.test('oferta.ch'));
console.log(validaDominio.test('linkedin.com'));
