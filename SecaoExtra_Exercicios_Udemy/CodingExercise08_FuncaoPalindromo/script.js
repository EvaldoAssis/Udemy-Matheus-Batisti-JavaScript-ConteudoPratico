/*

    Função de palíndromo
    
    Escreva uma função chamada isPalindrome que recebe uma palavra como argumento.
    A função deve verificar se a palavra é um palíndromo.
    Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda.
    A função deve retornar true se a palavra for um palíndromo e false caso contrário.
    
    Por exemplo:
        isPalindrome('radar') deve retornar true.

        isPalindrome('hello') deve retornar false.

*/

function isPalindrome(word) {
    
    /*
        A função split('') divide uma string em um array de substrings, onde cada caractere da string original se torna um elemento do array.
        A função reverse() inverte a ordem dos elementos em um array.
        A função join('') junta todos os elementos de um array em uma única string.
    */

    let invertedWord = word.split('').reverse().join('');
    
    if (word == invertedWord) {
        return true;
    } else {
        return false;
    }
    
}