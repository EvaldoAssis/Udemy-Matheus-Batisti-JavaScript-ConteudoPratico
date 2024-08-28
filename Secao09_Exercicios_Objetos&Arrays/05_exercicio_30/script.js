/* 

Exercício 05

Crie um array com 5 nomes, incluindo o seu;
Verifique se o seu nome existe no array;
Se existir imprima alguma mensagem no console;

*/

let names = ["Ari", "Boris", "Dado", "Evaldo", "Figo"];

if (names.includes("Evaldo")) {
    console.log("Alguma mensagem no console");
} else {
    console.log("O nome não foi encontrado");
}