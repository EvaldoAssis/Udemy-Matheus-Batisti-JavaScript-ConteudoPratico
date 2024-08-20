/*

    Cálculo da média

    Escreva uma função chamada calculateAverage que recebe um array de números como argumento.
    A função deve calcular a média dos números no array.
    A média é calculada sumndo todos os números e dividindo pelo total de números no array.
    A função deve retornar o valor da média calculada.

*/

function calculateAverage(numbers = [10, 10, 10]) {

    let average = 0;

    if (numbers.length === 0) {
        return average;
    }
    
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];        
    }

    average = sum / numbers.length;

    return average;

}

console.log(calculateAverage());