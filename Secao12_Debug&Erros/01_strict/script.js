"use strict" // Ativar o strict mode

opa1 = 'teste'; // uma variável sem declaração resultará em um erro.
let opa2 = 'teste';

// Tentativas de deletar propriedades não configuráveis resultam em um erro.
// delete Object.prototype;

function teste() {
  "use strict" // Pode ser declarado na classe ou em função expecífico
  let testando = 'teste';
}

teste();

// false.prop = "";
// "teste".prop = "";

/* 
Funções com parâmetros duplicados não são permitidas.

function sum(a, a, c) {
  return a + a + c;
} 
  
*/