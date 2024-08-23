let frase = "Só sei que nada sei";

let palavras = frase.split(" "); //Dividindo a palavra e retornando um Array 
console.log(palavras);

let novaFrase = palavras.join(":)") //Unindo as palavras com ":)" entre elas
console.log(novaFrase);

console.log(palavras.join(" ")); //Unindo as palavras com " " entre elas