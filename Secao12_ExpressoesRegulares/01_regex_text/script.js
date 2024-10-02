const reg1 = new RegExp('bola'); //Instancionando

console.log(reg1.test('Tem bola?'));
console.log(reg1.test('Não tem'));

const reg2 = /ana/; //Entre chaves

console.log(reg2.test('Fabiana'));
console.log(reg2.test('Juliana'));
console.log(reg2.test(' Otávio'));

//Dentro do console.log()
console.log(/ado/.test('tem um quadrado?'));
console.log(/ado/.test('só retângulo'));
