/* 

Exercício 10 - Desafio calculadora

Crie um objeto calculadora;
Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
Os métodos só devem aceitar dois parâmetros;
Utilize cada um dos métodos e imprima os valores no console;

*/

calculator = {

   sum: function(x, y) {
      return x + y;
   },

   subtraction: function(x, y) {
      return x - y;
   },

   devision: function(x, y) {
      return x / y;
   },

   multiplication: function(x, y) {
      return x * y;
   }

}

console.log(calculator.sum(10, 40));
console.log(calculator.subtraction(10, 40));
console.log(calculator.devision(10, 40));
console.log(calculator.multiplication(10, 40));
