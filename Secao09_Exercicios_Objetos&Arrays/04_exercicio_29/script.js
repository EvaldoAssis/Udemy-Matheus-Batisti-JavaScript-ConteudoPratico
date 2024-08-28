/* 

Exercício 04

Adicione a propriedade janelas no ônibus, com o valor de 20;
Delete a propriedade rodas;
Imprima a propriedade janelas no console;

*/

let bus = {
    doors: 4,
    wheels: 8,
    passengers: 48
};

delete bus.wheels;

bus.window = 20;

console.log(bus);
console.log(bus.window);