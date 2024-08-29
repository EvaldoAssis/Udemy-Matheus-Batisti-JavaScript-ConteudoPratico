/*

Soma de Números Únicos

Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.
A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.
Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.
Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.
Considere que o array pode conter tanto números inteiros positivos quanto negativos.

*/

function sumUniqueNumbers(arr) {
    let count = {};                             // Utilizamos um objeto para armazenar a contagem de cada número
    let soma = 0;                               // Variável para armazenar a soma dos números únicos

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] === undefined) {      // Verifica se o número não está no objeto 'count'
            count[arr[i]] = 1;                  // Inicializa a contagem desse número como 1
        } else {
            count[arr[i]]++;                    // Caso contrário, incrementa a contagem desse número
        }
    }

    /* Calculo da soma dos números que aparecem apenas uma vez */
    for (let num in count) {
        if (count[num] === 1) {                 // Verifica se a contagem do número é exatamente 1
            soma += parseInt(num);              // parseInt é usado para converter a chave string em número
        }
    }

    return soma;
}

console.log(sumUniqueNumbers([7, 7, 7, 0]));