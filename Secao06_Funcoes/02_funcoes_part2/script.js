
function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
};

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(2, 3, 4);
console.log("O valor de mult é " + mult);

function podeComprarAlcool(idade, rg) {
    if (idade >= 21 && rg == true) {
        console.log("Pode comparar alcool!");
    } else {
        console.log("A venda de alcool para essa pessoa é extritamente proibida!");
    }
};

console.log(podeComprarAlcool(19, true));
console.log(podeComprarAlcool(21, true));
console.log(podeComprarAlcool(22, 0));
console.log(podeComprarAlcool(26, 1));
console.log(podeComprarAlcool(19, true));