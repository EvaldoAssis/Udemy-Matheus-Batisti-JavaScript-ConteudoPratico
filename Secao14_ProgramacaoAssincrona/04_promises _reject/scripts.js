function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log(`O número é ${num}`));
        } else {
            reject(new Error('Falhou'));
        }
    });
}

verificarNumero(2);
verificarNumero(3);

/*
Nesse exemplo, resolve() é chamado se o número for igual a 2, mas se for diferente, a Promise é rejeitada com reject(), lançando um erro. 
Esse erro pode ser capturado com .catch() ao utilizar a Promise.
*/