const pontoRegex = /./; //Aceita qualquer coisa
console.log('.');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));
console.log(pontoRegex.test("#$%"));

console.log('\n');

const dRegex = /\d/; // Aceitará expressões que contenham números entre [0-9]
console.log('d');
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));
console.log(dRegex.test("#$%"));

console.log('\n');

const dRegex2 = /\D/; // Aceitará tudo que não contém APENAS números
console.log('D');
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));
console.log(dRegex2.test("#$%"));

console.log('\n');

const sRegex = /\s/; // Aceitará espaços vázios, quebras de linhas e tab
console.log('s');
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));
console.log(sRegex.test("#$%"));

console.log('\n');

const wRegex = /\w/; // Aceitará apenas caracteres alfanuméricos
console.log('w');
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));
console.log(wRegex.test("#$%"));

console.log('\n');

const wRegex2 = /\W/; // Não aceitará caracteres NÃO alfanuméricos
console.log('W');
console.log(wRegex2.test("asd"));
console.log(wRegex2.test(" "));
console.log(wRegex2.test("123"));
console.log(wRegex2.test("123sad"));
console.log(wRegex2.test("#$%"));