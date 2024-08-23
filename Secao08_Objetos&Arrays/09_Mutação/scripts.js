let pessoa = {
  nome: "João"
}

let pessoa2 = pessoa;

let pessoa3 = {
  nome: "Fabricio"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

/* Abaixo é possivel analisar que ao mexer em um objeto que é referência para outro ou referênciado por outro, ao mexer em um o outro é alterado. */

pessoa2.nome = "Pedro";
console.log(pessoa.nome);

pessoa.nome = "Maria";
console.log(pessoa2.nome);