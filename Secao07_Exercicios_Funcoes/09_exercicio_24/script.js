/* 

    Escreva uma função que receba dois números, o primeiro é a base e
    o segundo a potência;
    Depois faça essa operação e retorne o resultado;
    Por exemplo: 3, 2 = 9

*/

// As duas primeiras formas são simples e usam menos linhas de código

function potenciaFormaA(base, potencia) {
    return base ** potencia;
};

function potenciaFormaB(base, potencia) {
    return Math.pow(base, potencia);
};

function potenciaFormaC(base, potencia) {

    let result = base;

    for (let i = 1; i < potencia; i++) {
        result = result * base;        
    }

    return result;

}

console.log(potenciaFormaA(7, 4));
console.log(potenciaFormaB(7, 4));
console.log(potenciaFormaC(7, 4));
console.log(potenciaFormaA(6, 3));
console.log(potenciaFormaB(6, 3));
console.log(potenciaFormaC(6, 3));
