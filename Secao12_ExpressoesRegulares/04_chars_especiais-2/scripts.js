const dia = /\d\d/; //Verificando se a expressão possui dois dígitos númericos consecutivos (uma forma de validar se é um dia)

console.log(dia.test("2019") && "2019".length == 2); //Essa expressão tem o resultado de TRUE, pois por mais que 2019 se trata de um ano, ele possui 2 digitos consecutivos
console.log(dia.test("asd"));
console.log(dia.test("05"));

const palavrasPeloMenosTresLetras = /\w\w\w/; //Verificando se a expressão possui ao menos 3 caracteres

console.log('\n');
console.log(palavrasPeloMenosTresLetras.test("abc"));
console.log(palavrasPeloMenosTresLetras.test("as"));
console.log(palavrasPeloMenosTresLetras.test("junior"));