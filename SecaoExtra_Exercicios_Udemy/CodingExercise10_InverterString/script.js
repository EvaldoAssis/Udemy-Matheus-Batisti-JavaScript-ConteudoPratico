/*

    Inverter string
    
    Escreva uma função chamada reverseString que recebe uma string como argumento.
    A função deve inverter a ordem dos caracteres na string.
    A função deve retornar a string invertida.

*/

function reverseString(word) {
    
    let invertedWord = "";
    invertedWord = word.split('').reverse().join('');

    return invertedWord;
}