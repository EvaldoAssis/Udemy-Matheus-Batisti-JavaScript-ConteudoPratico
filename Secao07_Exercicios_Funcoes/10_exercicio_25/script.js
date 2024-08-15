/* 

    Escreva uma função que recebe um número, e o decrementa de 1 em
    1 com um loop;
    Além disso imprima somente os números pares no console;

*/

function decrementaNumero(num) {

    for (let i = num; i >= 0; i--) {
        if(i % 2 == 0) {
            console.log(`O número atual ${i} é um número par`)
        }
    }

}

decrementaNumero(10);
decrementaNumero(11);
decrementaNumero(21);
decrementaNumero(31);