//Função simples
function imprimirNoConsole() {
    console.log("Mensagem impressa");
};

//Função com parâmetros
imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log("O número é: " + num);
};

imprimirUmNumero(1);
imprimirUmNumero(3);
imprimirUmNumero(5);

//Função anônima atrelada a uma variável
const numeroAleatorio = function() {
    console.log(Math.random());
};

numeroAleatorio();
numeroAleatorio();