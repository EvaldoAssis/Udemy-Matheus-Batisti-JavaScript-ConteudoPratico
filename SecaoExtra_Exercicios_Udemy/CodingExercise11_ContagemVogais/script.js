/*

    Contagem de Vogais

    Escreva uma função chamada countVowels que recebe uma string como argumento.
    A função deve contar o número de vogais presentes na string (considerando letras maiúsculas e minúsculas).
    A função deve retornar o total de vogais encontradas.

*/

function countVowels(text) {

    let transformedText = text.toLowerCase().split('');

    let sum = 0;

    for (let i = 0; i < transformedText.length; i++) {
        if (transformedText[i] == 'a' || transformedText[i] == 'e' || transformedText[i] == 'i' || transformedText[i] == 'o' || transformedText[i] == 'u') {
            sum++;
        }
    }

    return sum;

}

console.log(countVowels('ABACATE'));