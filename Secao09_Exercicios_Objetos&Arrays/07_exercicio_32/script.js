/* 

Exercício 07

Crie um array com 5 elementos;
Faça uma iteração entre todos eles e imprima no console o valor;

*/

let arrFiveElements = [3000, 4000, 5000, 6000, 7000];

arrFiveElements.forEach(element => {
    console.log(element);
});

// OU
console.log("\n");

for (let i = 0; i < arrFiveElements.length; i++) {
    console.log(arrFiveElements[i]);
};

//OU
console.log("\n");

let i = 0;

while (i < arrFiveElements.length) {
    console.log(arrFiveElements[i]);
    i++;
}