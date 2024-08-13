function repetirFrase(frase, n=5) {
  for (let x = 1; x <= n; x++) {
    console.log(frase + " " + x);
  }
};
repetirFrase("Testando", 2);
repetirFrase("Rodar cinco vezes");

const potencia = function(base, exp = 2) {
  return Math.pow(base, exp);
};
console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));

const divisao = (dividendo, divisor = 2) => {
  return dividendo / divisor;
};
console.log(divisao(10));
console.log(divisao(10, 2));