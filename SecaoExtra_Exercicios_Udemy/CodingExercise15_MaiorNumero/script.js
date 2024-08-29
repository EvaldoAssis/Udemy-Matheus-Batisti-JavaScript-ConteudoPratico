/*

Encontrar o maior número em um array

Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números.
A função deve retornar o maior número presente no array.

*/

    /* O método Math.max() não aceita um array diretamente. 
    Ele espera uma lista de argumentos separados. 
    Para passar um array para Math.max(), 
    é necessário usar o operador de espalhamento (...) */

function findMaxNumber(arr) {
    return Math.max(...arr); 
}

console.log(findMaxNumber([1, 2, 10, 4, 11]));

//OU

function findMaxNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxNumber([11, 20, 100, 400, 1100]));