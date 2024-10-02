const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test('contatodoassisz@gmail.com'));
console.log(validaEmail.test('contatodoassisz@gmail'));
console.log(validaEmail.test('gmail.com'));
console.log(validaEmail.test('contatodoassisz@gmail.com.br'));