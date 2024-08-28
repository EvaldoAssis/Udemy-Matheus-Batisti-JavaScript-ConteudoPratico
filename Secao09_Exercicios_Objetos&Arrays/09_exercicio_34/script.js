/* 

Exercício 09

Crie um array a partir de uma frase;
Imprima cada palavra do array no console por meio de um for;

*/

let phrase = "A definição de insanidade é fazer a mesma coisa repetidamente e esperar um resultado diferente";
let arr = phrase.split(" ");

arr.forEach(element => {
   console.log(element); 
});