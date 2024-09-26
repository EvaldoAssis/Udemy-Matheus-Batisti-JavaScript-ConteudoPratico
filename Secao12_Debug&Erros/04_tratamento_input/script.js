function checarNumero(num) {
  let number = Number(num);
  if (Number.isNaN(number)) {
    console.log('Por favor, insira somente números!');
  } else {
    console.log(number);
  }
}

checarNumero(10);
checarNumero('TESTE');

//Exemplo de tratamento de parâmetros por função
let number = prompt("Digite um número");
checarNumero(number);