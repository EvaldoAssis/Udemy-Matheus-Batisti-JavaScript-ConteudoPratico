/* 

    Escreva uma função que retorne um número aleatório;
    O número máximo retornado deve ser passado via parâmetro;
    Dica: utilize Math.random();

*/

function retornaNumeroAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(retornaNumeroAleatorio(90));
console.log(retornaNumeroAleatorio(100));
console.log(retornaNumeroAleatorio(1000));
console.log(retornaNumeroAleatorio(10000));