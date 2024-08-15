/* 

    Escreva uma função que receba um número negativo e retorne um
    número positivo;
    Dica: utilize a função Math.abs

*/

function retornaNumeroPositivo(num) {
    return Math.abs(num);
} 

console.log(retornaNumeroPositivo(-8));
console.log(retornaNumeroPositivo(-8.8));
console.log(retornaNumeroPositivo(-8.88));
console.log(retornaNumeroPositivo(8888));