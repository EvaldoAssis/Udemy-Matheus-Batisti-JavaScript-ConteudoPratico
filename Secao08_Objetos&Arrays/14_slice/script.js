let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Pegando o elemento 6
console.log(nums.slice(6, 7));

//Pegando os elementos 5 e 7
let newNumbers = nums.slice(5, 7);
console.log(newNumbers);

//Caso não passamos como parâmetro o índice final, o método continua até o final do array
console.log(nums.slice(3));

//Pegando os últimos três elementos
console.log(nums.slice(-3));

//Pegando os elementos entre o quarto índice e os anteriores aos últimos três índices
console.log(nums.slice(4, -3));