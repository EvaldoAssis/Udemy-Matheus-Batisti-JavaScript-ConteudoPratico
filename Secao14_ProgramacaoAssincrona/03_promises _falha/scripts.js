let p = Promise.resolve(new Error('Não deu certo'));

console.log("ABCD");

p.then((value) => console.log(value))
    .catch(reason => console.log("Falhou: " + reason));

/*
    Neste exemplo, a Promise é rejeitada com um erro. O .catch() captura a falha e exibe a mensagem "Falhou: Não deu certo". 
    Usar o .catch() ajuda a garantir que erros assíncronos sejam tratados corretamente.
*/