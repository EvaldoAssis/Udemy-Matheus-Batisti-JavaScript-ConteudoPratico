async function somar(a, b) {
    return a + b;
}

somar(2, 4).then(value => console.log(value));

console.log(somar(2, 4));


/*

Neste exemplo: A função somar é declarada como assíncrona usando async.
Quando chamamos somar(2, 4), ela retorna uma Promise. 
O método .then() é usado para acessar o resultado quando a Promise é resolvida.
A linha console.log(somar(2, 4)); imprime uma Promise pendente, não o resultado da soma, 
porque a função ainda não foi resolvida no momento em que a console.log é executada.

*/