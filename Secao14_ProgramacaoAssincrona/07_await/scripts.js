function somaComDeplay(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b);
        }, 3000);
    })
};

async function resSoma(a, b, c, d) {
    let x = somaComDeplay(a, b);
    let y = c;

    return await x + y;

}

resSoma(1, 2, 3).then(values => console.log(values));


/*

Neste exemplo, o await faz com que a função resSoma pause a execução até que a Promise somaComDelay(a, b) seja resolvida. 
Assim que a Promise é concluída, o resultado é armazenado em x, e a soma de x com c é retornada. 
Após 3 segundos, o valor total (6) é impresso no console. Se a Promise for rejeitada, um erro pode ser tratado usando um bloco try...catch.

*/