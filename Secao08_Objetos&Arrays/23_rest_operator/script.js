let parametroUm = 'Número 1';
let parametroDois = 'Número 2';
let parametroTres = 'Número 3';
let parametroQuatro = 'Número 4';

function imprimirNumeros(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

imprimirNumeros(parametroUm, parametroDois, parametroTres);
console.log('PULAR LINHAS');

imprimirNumeros(parametroTres,parametroQuatro);
console.log('PULAR LINHAS');

imprimirNumeros(2, 6, 10, 14, 18, 22, 26, 30);