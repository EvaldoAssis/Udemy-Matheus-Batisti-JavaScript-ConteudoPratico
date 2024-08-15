/* 

    Escreva uma função que detecta o tipo de dado passado;
    Verifque se é um: number, boolean ou string
    E retorne uma mensagem para cada tipo;
    Execute uma função para cada caso;

*/

function identificaTipoDado(dado) {
    if(typeof dado == 'number') {
        console.log(`Este valor: "${dado}" é um número`)
    } else if(typeof dado == 'boolean') {
        console.log(`Este valor: "${dado}" é booleano`)
    } else if (typeof dado == 'string') {
        console.log(`Este valor: "${dado}" é uma string`)
    }
};

identificaTipoDado(45);
identificaTipoDado("JhonJhon");
identificaTipoDado(true);