class Endereco {

  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set atualizaRua(rua) {
    this.rua = rua;
  }

  set atualizaBairro(bairro) {
    this.bairro = bairro;
  }

  set atualizaCidade(cidade) {
    this.cidade = cidade;
  }

  set atualizaEstado(estado) {
    this.estado = estado;
  }

}

let end01 = new Endereco('Rua Haddock', 'Cerqueira Cesar', 'Sum Paulo', 'sp');

console.log(end01);

end01.atualizaRua = 'Rua Haddock Lobo';
end01.atualizaBairro = 'Cerqueira César';
end01.atualizaCidade = 'São Paulo';
end01.atualizaEstado = 'SP';

console.log(end01);