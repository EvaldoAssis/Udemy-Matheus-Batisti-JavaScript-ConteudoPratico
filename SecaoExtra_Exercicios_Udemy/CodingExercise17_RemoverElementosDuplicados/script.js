/*

Remover elementos duplicados de um array

Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos.
A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas.

*/

function removeDuplicates(arr) {

    let arrNoDuplicates = [];
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (!arrNoDuplicates.includes(arr[i])) {
            arrNoDuplicates.push(arr[i]);
        }
    }

    return arrNoDuplicates;

};

console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 6]));