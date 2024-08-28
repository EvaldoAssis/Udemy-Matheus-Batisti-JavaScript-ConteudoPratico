/* 

Exercício 06

Crie dois arrays, um com mais de 5 elementos e outro com menos;
Faça uma função que verifica o número de elementos;
Se possuir menos que 5, imprima “Poucos elementos” no console;
Se tiver mais, imprima “Muitos elementos”;

*/

let arrTwoElements = [1000, 2000];
let arrFiveElements = [3000, 4000, 5000, 6000, 7000];

function checkTheNumberOfElements(arr) {

    if (arr.length < 5) {
        console.log("Poucos elementos"); 
    } else if (arr.length > 5) {
        console.log("Muitos elementos");
    } else {
        console.log("OK");
    }
    
};

checkTheNumberOfElements(arrTwoElements);
checkTheNumberOfElements(arrFiveElements);