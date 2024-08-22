let pessoa = {
  nome: 'Evaldo',
  idade: 29,
  profissao: 'Dev. Salesforce',
};

//Acessando objeto
console.log(pessoa);

//Acessando propriedade
console.log(pessoa.nome);

//Excluindo propriedade
delete pessoa.nome

//Acessando propriedade após exclusão
console.log(pessoa.nome);

//Acessando objeto após exclusão de propriedade
console.log(pessoa);

//Add. propriedade
pessoa.estadoCivil = "Solteiro";

//Acessando objeto após add. de propriedade
console.log(pessoa);

//Acessando propriedade após add.
console.log(pessoa.estadoCivil);